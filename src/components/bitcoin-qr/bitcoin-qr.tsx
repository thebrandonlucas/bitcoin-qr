import { Component, Element, Method, Prop, h } from '@stencil/core';
import QRCodeStyling, { CornerDotType, CornerSquareType, DotType, DotTypes, DrawType, ErrorCorrectionLevel, Gradient, Mode, Options, ShapeType, TypeNumber } from 'qr-code-styling';

@Component({
  tag: 'bitcoin-qr',
  shadow: true,
})
export class BitcoinQR {
  // TODO: comments
  @Element() bitcoinQR: HTMLElement;

  // [BIP-21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) format,
  // overrides `bitcoin`, `lightning`, and `parameters` props
  @Prop() unified: string;
  @Prop() bitcoin: string;
  @Prop() lightning: string;
  @Prop() parameters: string;
  @Prop() callback: () => void;
  @Prop() isPolling: boolean;
  @Prop() interval: number;

  // QR code styling options
  @Prop() width: number;
  @Prop() height: number;
  @Prop() type: DrawType;
  @Prop() margin: number;
  @Prop() image: string;
  @Prop() shape: ShapeType;
  @Prop() qrTypeNumber: TypeNumber;
  @Prop() qrMode: Mode;
  @Prop() qrErrorCorrectionLevel: ErrorCorrectionLevel;
  // Image options
  @Prop() imageHideBackgroundDots: boolean;
  @Prop() imageSize: number;
  @Prop() imageCrossOrigin: string;
  @Prop() imageMargin: number;
  // Dots options
  @Prop() dotsType: DotType;
  @Prop() dotsColor: string;
  @Prop() dotsGradient: Gradient;
  // Corners square options
  @Prop() cornersSquareType: CornerSquareType;
  @Prop() cornersSquareColor: string;
  @Prop() cornersSquareGradient: Gradient;
  // Corners dot options
  @Prop() cornersDotType: CornerDotType;
  @Prop() cornersDotColor: string;
  @Prop() cornersDotGradient: Gradient;
  // Background options
  @Prop() backgroundRound: number;
  @Prop() backgroundColor: string;
  @Prop() backgroundGradient: Gradient;

  poll() {
    if (!this.isPolling) {
      return;
    }
    if (!this.callback || !this.interval) {
      throw new Error('Must pass callback and interval props to bitcoin-qr when is-polling is true');
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
    if (!(this.bitcoin || this.lightning || this.unified)) {
      throw new Error('Must pass at least one of the following props to bitcoin-qr: bitcoin, lightning, unified');
    }
    // TODO: unified validation
    if (this.unified) {
      return this.unified;
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
    const options: Omit<Options, 'data'> = {
      width: this.width,
      height: this.height,
      type: this.type,
      margin: this.margin,
      image: this.image,
      qrOptions: {
        typeNumber: this.qrTypeNumber,
        mode: this.qrMode,
        errorCorrectionLevel: this.qrErrorCorrectionLevel,
      },
      imageOptions: {
        hideBackgroundDots: this.imageHideBackgroundDots,
        imageSize: this.imageSize,
        crossOrigin: this.imageCrossOrigin,
        margin: this.imageMargin,
      },
      dotsOptions: {
        type: this.dotsType,
        color: this.dotsColor,
        gradient: this.dotsGradient,
      },
      cornersSquareOptions: {
        type: this.cornersSquareType,
        color: this.cornersSquareColor,
        gradient: this.cornersSquareGradient,
      },
      cornersDotOptions: {
        type: this.cornersDotType,
        color: this.cornersDotColor,
        gradient: this.cornersDotGradient,
      },
      backgroundOptions: {
        round: this.backgroundRound,
        color: this.backgroundColor,
        gradient: this.backgroundGradient,
      },
    };
    const qrCode = new QRCodeStyling({ ...options, data: this.uri });
    const canvas = document.createElement('div');
    canvas.id = 'canvas';
    qrCode.append(canvas);
    this.bitcoinQR.shadowRoot.appendChild(qrCode as unknown as Node);
  }
}
