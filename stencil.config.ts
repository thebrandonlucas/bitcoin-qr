import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bitcoin-qr',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
