import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'bitcoin-qr',
  shadow: true,
})
export class BitcoinQR {
  // TODO: comments
  @Element() bitcoinQR: HTMLElement;

  @Prop() bitcoin: string;
  @Prop() lightning: string;
  @Prop() bip21: string;
  @Prop() parameters: string;
  @Prop() interval: number;
  @Prop() callback: () => void;
  @Prop() isPolling: boolean;
  @Prop() imgSrc: string;
  @Prop() moduleColor: string;
  @Prop() positionRingColor: string;
  @Prop() positionCenterColor: string;
  // TODO: pass down style

  // async componentDidLoad() {
  //   // Set <qr-code> attributes
  //   // const qrCode = (
  //   // );
  //   const shadow = this.bitcoinQR.attachShadow({ mode: 'open' });
  //   const qrCode = document.createElement('qr-code') as HTMLElement;
  //   qrCode.setAttribute('id', 'qr-code');
  //   qrCode.setAttribute('contents', this.uri);
  //   qrCode.setAttribute('module-color', this.moduleColor);
  //   qrCode.setAttribute('position-ring-color', this.positionRingColor);
  //   qrCode.setAttribute('position-center-color', this.positionCenterColor);
  //   qrCode.setAttribute('style', this.bitcoinQR.style.cssText);
  //   this.bitcoinQR.appendChild(qrCode);
  //   shadow.appendChild(qrCode);
  //   console.log('this', qrCode, this.bitcoinQR);
  //   if (this.isPolling) {
  //     this.poll();
  //   }
  // }

  poll() {
    if (!this.isPolling) {
      return;
    }
    setTimeout(() => {
      try {
        this.callback();
        this.poll();
      } catch (e) {
        throw new Error(String(e));
      }
    }, this.interval);
  }

  get uri() {
    if (!(this.bitcoin || this.lightning || this.bip21)) {
      throw new Error('Must pass at least one of the following props to bitcoin-qr: bitcoin, lightning, bip21');
    }
    // TODO: bip21 validation
    if (this.bip21) {
      return this.bip21;
    }
    // We only use lightning as protocol if there is no on-chain bitcoin.
    // Otherise we use it as a parameter.
    // See https://github.com/lightning/bolts/blob/master/10-payment-encoding.md#encoding-overview
    const protocol = this.bitcoin ? 'bitcoin' : 'lightning';
    const pathname = this.bitcoin ? this.bitcoin : this.lightning;
    let uri: URL;
    try {
      uri = new URL(`${protocol}:${pathname}`);
    } catch (e) {
      throw new Error(`Invalid URL format: "${protocol}:${pathname}"`);
    }
    let params: URLSearchParams;
    try {
      params = new URLSearchParams(this.lightning ? `lightning=${this.lightning}&${this.parameters}` : this.parameters);
      uri.search = params.toString();
    } catch (e) {
      throw new Error(`Invalid URLSearchParams format: "${this.parameters}"`);
    }
    return uri.toString();
  }

  render() {
    let slottedImg: HTMLElement;
    if (this.imgSrc) {
      slottedImg = <img slot="icon" src={this.imgSrc} />;
    }
    return (
      <qr-code
        id="qr-code"
        style={this.bitcoinQR.style.cssText}
        contents={this.uri}
        module-color={this.moduleColor}
        position-ring-color={this.positionRingColor}
        position-center-color={this.positionCenterColor}
      >
        {slottedImg}
      </qr-code>
    );
  }
}
