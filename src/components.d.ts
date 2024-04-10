/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BitcoinQr {
        "backgroundColor"?: string;
        "backgroundRound"?: number;
        "bitcoin"?: string;
        "callback"?: () => void;
        "cornersDotColor"?: string;
        "cornersDotType"?: 'square' | 'dot';
        "cornersSquareColor"?: string;
        "cornersSquareType"?: 'square' | 'extra-rounded' | 'dot';
        "debug"?: boolean;
        "dotsColor"?: string;
        "dotsRotation"?: number;
        "dotsType"?: 'square' | 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'extra-rounded';
        "height"?: number;
        "image"?: string;
        "imageCrossOrigin"?: string;
        "imageHideBackgroundDots"?: boolean;
        "imageMargin"?: number;
        "imageSize"?: number;
        "isPolling"?: boolean;
        "lightning"?: string;
        "margin"?: number;
        "parameters"?: string;
        "pollInterval"?: number;
        "preferLightning"?: boolean;
        "qrErrorCorrectionLevel"?: 'L' | 'M' | 'Q' | 'H';
        "qrMode"?: 'Numeric' | 'Alphanumeric' | 'Byte' | 'Kanji';
        "qrTypeNumber"?: number;
        "shape"?: 'square' | 'circle';
        "type"?: 'canvas' | 'svg';
        "unified"?: string;
        "width"?: number;
    }
}
declare global {
    interface HTMLBitcoinQrElement extends Components.BitcoinQr, HTMLStencilElement {
    }
    var HTMLBitcoinQrElement: {
        prototype: HTMLBitcoinQrElement;
        new (): HTMLBitcoinQrElement;
    };
    interface HTMLElementTagNameMap {
        "bitcoin-qr": HTMLBitcoinQrElement;
    }
}
declare namespace LocalJSX {
    interface BitcoinQr {
        "backgroundColor"?: string;
        "backgroundRound"?: number;
        "bitcoin"?: string;
        "callback"?: () => void;
        "cornersDotColor"?: string;
        "cornersDotType"?: 'square' | 'dot';
        "cornersSquareColor"?: string;
        "cornersSquareType"?: 'square' | 'extra-rounded' | 'dot';
        "debug"?: boolean;
        "dotsColor"?: string;
        "dotsRotation"?: number;
        "dotsType"?: 'square' | 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'extra-rounded';
        "height"?: number;
        "image"?: string;
        "imageCrossOrigin"?: string;
        "imageHideBackgroundDots"?: boolean;
        "imageMargin"?: number;
        "imageSize"?: number;
        "isPolling"?: boolean;
        "lightning"?: string;
        "margin"?: number;
        "parameters"?: string;
        "pollInterval"?: number;
        "preferLightning"?: boolean;
        "qrErrorCorrectionLevel"?: 'L' | 'M' | 'Q' | 'H';
        "qrMode"?: 'Numeric' | 'Alphanumeric' | 'Byte' | 'Kanji';
        "qrTypeNumber"?: number;
        "shape"?: 'square' | 'circle';
        "type"?: 'canvas' | 'svg';
        "unified"?: string;
        "width"?: number;
    }
    interface IntrinsicElements {
        "bitcoin-qr": BitcoinQr;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bitcoin-qr": LocalJSX.BitcoinQr & JSXBase.HTMLAttributes<HTMLBitcoinQrElement>;
        }
    }
}
