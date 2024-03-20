export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/BitcoinQR',
};

const Template = args => {
  // return `
  //     <bitcoin-qr
  //       unified="${args.unified}"
  //       bitcoin="${args.bitcoin}"
  //       lightning="${args.lightning}"
  //       parameters="${args.parameters}"
  //       callback="${args.callback}"
  //       is-polling="${args.isPolling}"
  //       poll-interval="${args.pollInterval}"
  //       width="${args.width}"
  //       height="${args.height}"
  //       type="${args.type}"
  //       margin="${args.margin}"
  //       image="${args.image}"
  //       shape="${args.shape}"
  //       qr-type-number="${args.qrTypeNumber}"
  //       qr-mode="${args.qrMode}"
  //       qr-error-correction-level="${args.qrErrorCorrectionLevel}"
  //       image-hide-background-dots="${args.imageHideBackgroundDots}"
  //       image-size="${args.imageSize}"
  //       image-cross-origin="${args.imageCrossOrigin}"
  //       image-margin="${args.imageMargin}"
  //       dots-type="${args.dotsType}"
  //       dots-color="${args.dotsColor}"
  //       dots-gradient-type="${args.dotsGradientType}"
  //       dots-rotation="${args.dotsRotation}"
  //       corners-square-type="${args.cornersSquareType}"
  //       corners-square-color="${args.cornersSquareColor}"
  //       corners-dot-type="${args.cornersDotType}"
  //       corners-dot-color="${args.cornersDotColor}"
  //       background-round="${args.backgroundRound}"
  //       background-color="${args.backgroundColor}"
  //       background-gradient="${args.backgroundGradient}"
  //       ></bitcoin-qr>
  //       `;

  // FIXME: I doubt this is the default way to stop args being set as "undefined" in storybook
  // Figure out how to make args optional, and don't declare the arg "undefined" if a user doesn't pass them in,
  // the "proper" storybook way
  // Filter out undefined values from args
  const filteredArgs = Object.fromEntries(Object.entries(args).filter(([_, value]) => value !== undefined));

  return `
          <bitcoin-qr
            ${Object.entries(filteredArgs)
              .map(([key, value]) => `${key}="${value}"`)
              .join(' ')}
          ></bitcoin-qr>
        `;
};

export const Unified = Template.bind({});
Unified.args = {
  unified: 'BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U',
};

export const WithBitcoin = Template.bind({});
WithBitcoin.args = {
  bitcoin: 'BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U',
};
