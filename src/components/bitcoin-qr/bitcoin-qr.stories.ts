import { fn } from '@storybook/test';

export default {
  title: 'Example/BitcoinQR',
  tags: ['autodocs'],
  render: args => {
    // TODO: add callback/polling functionality to storybook
    const el = document.createElement('bitcoin-qr');
    // Filter out undefined values from being passed in
    const filteredArgs = Object.fromEntries(Object.entries(args).filter(([_, value]) => value !== undefined));
    Object.entries(filteredArgs).forEach(([key, value]) => {
      if (key === 'onclick' && value instanceof Function && value !== undefined) {
        el.addEventListener('click', value as () => void);
        return;
      }
      el[key] = value;
    });
    return el;
  },
  argTypes: {
    unified: { control: 'text' },
    bitcoin: { control: 'text' },
    lightning: { control: 'text' },
    parameters: { control: 'text' },
    callback: { control: 'text' },
    onclick: { control: 'onclick' },
    isPolling: { control: 'boolean' },
    pollInterval: { control: 'number' },
    width: { control: 'number' },
    height: { control: 'number' },
    type: { control: 'radio', options: ['canvas', 'svg'] },
    margin: { control: 'number' },
    image: { control: 'text' },
    shape: { control: 'radio', options: ['square', 'circle'] },
    qrTypeNumber: { control: 'number' },
    qrMode: { control: 'radio', options: ['Numeric', 'Alphanumeric', 'Byte', 'Kanji'] },
    qrErrorCorrectionLevel: { control: 'radio', options: ['L', 'M', 'Q', 'H'] },
    imageHideBackgroundDots: { control: 'boolean' },
    imageSize: { control: 'number' },
    imageCrossOrigin: { control: 'text' },
    imageMargin: { control: 'number' },
    dotsType: { control: 'radio', options: ['square', 'dots', 'rounded', 'classy', 'classy-rounded', 'extra-rounded'] },
    dotsColor: { control: 'text' },
    dotsGradientType: { control: 'radio', options: ['radial', 'linear'] },
    dotsRotation: { control: 'number' },
    cornersSquareType: { control: 'radio', options: ['square', 'extra-rounded', 'dot'] },
    cornersSquareColor: { control: 'text' },
    cornersDotType: { control: 'radio', options: ['square', 'dot'] },
    cornersDotColor: { control: 'text' },
    backgroundRound: { control: 'number' },
    backgroundColor: { control: 'text' },
    backgroundGradient: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onclick: fn() },
};

export const Unified = {
  args: {
    unified:
      'bitcoin:BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6',
  },
};

export const Bitcoin = {
  args: {
    bitcoin: 'BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U',
  },
};

export const Lightning = {
  args: {
    lightning:
      'LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6',
  },
};

export const ParametersQueryString = {
  args: {
    bitcoin: 'BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U',
    parameters: 'amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday',
  },
};
