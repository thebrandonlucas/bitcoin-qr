import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bitcoin-qr',
  globalScript: 'src/global/app.ts',
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
