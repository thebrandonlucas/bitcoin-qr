import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bitcoin-qr',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  sourceMap: false,
  extras: {
    enableImportInjection: true,
  },
};
