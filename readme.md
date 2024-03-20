# bitcoin-qr

A web component for Bitcoin on-chain, lightning, and unified [BIP-21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) payment QR codes with built-in polling.

Built on top of [qr-code-styling](https://qr-code-styling.com/), it exposes all the [options](https://github.com/kozakdenys/qr-code-styling?tab=readme-ov-file#api-documentation) provided by it.

### To Run Development Server

Open `stencil.config.ts`, and uncomment lines 11-15:

```
// NOTE: Uncomment this for dev server
// {
//   type: 'www',
//   serviceWorker: null, // disable service workers
// },
```

Then run `npm run start`
