/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CornerDotType, CornerSquareType, DotType, DrawType, ErrorCorrectionLevel, Gradient, Mode, ShapeType, TypeNumber } from "qr-code-styling";
export { CornerDotType, CornerSquareType, DotType, DrawType, ErrorCorrectionLevel, Gradient, Mode, ShapeType, TypeNumber } from "qr-code-styling";
export namespace Components {
    interface BitcoinQr {
        "backgroundColor": string;
        "backgroundGradient": Gradient;
        "backgroundRound": number;
        "bitcoin": string;
        "callback": () => void;
        "cornersDotColor": string;
        "cornersDotGradient": Gradient;
        "cornersDotType": CornerDotType;
        "cornersSquareColor": string;
        "cornersSquareGradient": Gradient;
        "cornersSquareType": CornerSquareType;
        "dotsColor": string;
        "dotsGradient": Gradient;
        "dotsType": DotType;
        "height": number;
        "image": string;
        "imageCrossOrigin": string;
        "imageHideBackgroundDots": boolean;
        "imageMargin": number;
        "imageSize": number;
        "interval": number;
        "isPolling": boolean;
        "lightning": string;
        "margin": number;
        "parameters": string;
        "qrErrorCorrectionLevel": ErrorCorrectionLevel;
        "qrMode": Mode;
        "qrTypeNumber": TypeNumber;
        "shape": ShapeType;
        "type": DrawType;
        "unified": string;
        "width": number;
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
        "backgroundGradient"?: Gradient;
        "backgroundRound"?: number;
        "bitcoin"?: string;
        "callback"?: () => void;
        "cornersDotColor"?: string;
        "cornersDotGradient"?: Gradient;
        "cornersDotType"?: CornerDotType;
        "cornersSquareColor"?: string;
        "cornersSquareGradient"?: Gradient;
        "cornersSquareType"?: CornerSquareType;
        "dotsColor"?: string;
        "dotsGradient"?: Gradient;
        "dotsType"?: DotType;
        "height"?: number;
        "image"?: string;
        "imageCrossOrigin"?: string;
        "imageHideBackgroundDots"?: boolean;
        "imageMargin"?: number;
        "imageSize"?: number;
        "interval"?: number;
        "isPolling"?: boolean;
        "lightning"?: string;
        "margin"?: number;
        "parameters"?: string;
        "qrErrorCorrectionLevel"?: ErrorCorrectionLevel;
        "qrMode"?: Mode;
        "qrTypeNumber"?: TypeNumber;
        "shape"?: ShapeType;
        "type"?: DrawType;
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
