import { Component, Element, Prop, h } from '@stencil/core';
import QRCodeStyling, { Options } from 'qr-code-styling';

@Component({
  tag: 'bitcoin-qr',
  shadow: true,
})
export class BitcoinQR {
  @Element() bitcoinQR: HTMLElement;

  // [BIP-21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) format,
  // overrides `bitcoin`, `lightning`, and `parameters` props
  @Prop() unified?: string;
  @Prop() bitcoin?: string;
  @Prop() lightning?: string;
  @Prop() parameters?: string;
  @Prop() callback?: () => void;
  @Prop() isPolling?: boolean;
  @Prop({ mutable: true }) pollInterval?: number;

  // QR code styling options
  @Prop() width?: number;
  @Prop() height?: number;
  @Prop() type?: 'canvas' | 'svg'; // DrawType
  @Prop() margin?: number;
  @Prop() image?: string;
  @Prop() shape?: 'square' | 'circle'; // ShapeType
  @Prop() qrTypeNumber?: number; // QrTypeNumber
  @Prop() qrMode?: 'Numeric' | 'Alphanumeric' | 'Byte' | 'Kanji'; // Mode
  @Prop() qrErrorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'; // ErrorCorrectionLevel
  // Image options
  @Prop() imageHideBackgroundDots?: boolean;
  @Prop() imageSize?: number;
  @Prop() imageCrossOrigin?: string;
  @Prop() imageMargin?: number;
  // Dots options
  @Prop() dotsType?: 'square' | 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'extra-rounded';
  @Prop() dotsColor?: string;
  @Prop() dotsGradientType?: 'radial' | 'linear'; // GradientType
  @Prop() dotsRotation?: number;
  // TODO: gradient options
  // @Prop() dotsGradient?: Gradient;
  // Corners square options
  @Prop() cornersSquareType?: 'square' | 'extra-rounded' | 'dot'; // CornerSquareType
  @Prop() cornersSquareColor?: string;
  // @Prop() cornersSquareGradient?: Gradient;
  // Corners dot options
  @Prop() cornersDotType?: 'square' | 'dot'; // CornerDotType
  @Prop() cornersDotColor?: string;
  // @Prop() cornersDotGradient?: Gradient;
  // Background options
  @Prop() backgroundRound?: number;
  @Prop() backgroundColor?: string;
  // @Prop() backgroundGradient?: Gradient;

  poll() {
    if (!this.callback) {
      return;
    }
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
    }, this.pollInterval);
  }

  get uri() {
    if (!(this.bitcoin || this.lightning || this.unified)) {
      throw new Error('Must pass at least one of the following props to bitcoin-qr: bitcoin, lightning, unified');
    }
    // TODO: unified bip21 validation
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
      const isLightningOnly = this.lightning && !(this.bitcoin || this.unified);
      console.log('isLightningOnly', isLightningOnly);
      console.log('this.lightning', this.lightning);
      console.log('this.bitcoin', this.bitcoin);
      console.log('this.unified', this.unified);
      params = new URLSearchParams(isLightningOnly ? this.parameters : `lightning=${this.lightning}&${this.parameters}`);
      uri.search = params.toString();
    } catch (e) {
      throw new Error(`Invalid URLSearchParams format: "${this.parameters}"`);
    }
    return uri.toString();
  }

  getDefinedProps() {
    if (!this.uri) {
      throw new Error('Must pass at least one of the following props to bitcoin-qr: bitcoin, lightning, unified');
    }
    const optionsKeys = [
      'unified',
      'bitcoin',
      'lightning',
      'parameters',
      'isPolling',
      'pollInterval',
      'width',
      'height',
      'type',
      'margin',
      'image',
      'shape',
      'qrTypeNumber',
      'qrMode',
      'qrErrorCorrectionLevel',
      'imageHideBackgroundDots',
      'imageSize',
      'imageCrossOrigin',
      'imageMargin',
      'dotsType',
      'dotsColor',
      'dotsGradient',
      'cornersSquareType',
      'cornersSquareColor',
      'cornersSquareGradient',
      'cornersDotType',
      'cornersDotColor',
      'cornersDotGradient',
      'backgroundRound',
      'backgroundColor',
      'backgroundGradient',
    ];
    const options: Options = {};
    optionsKeys.forEach(key => {
      if (this[key] !== undefined) {
        options[key] = this[key];
      }
    });
    return {
      data: this.uri,
      ...options,
    };
  }

  componentWillLoad() {
    if (!this.pollInterval) {
      console.warn('Attribute "Interval" not provided, defaulting to poll every 5 seconds');
      this.pollInterval = 5000;
    }
    if (!this.width) {
      console.warn('Attribute "width" not provided, defaulting to 300px');
      this.width = 300;
    }
    if (!this.height) {
      this.height = 300;
    }
  }

  componentDidLoad() {
    this.poll();
    const qr = new QRCodeStyling(this.getDefinedProps());
    const shadowContainer = this.bitcoinQR.shadowRoot.getElementById('bitcoin-qr-container');
    qr.append(shadowContainer);
  }

  // TODO: add webln optional support with copy on click

  // @Watch('')
  render() {
    return <div id="bitcoin-qr-container"></div>;
  }
}
