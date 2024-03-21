# `<bitcoin-qr />`

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Latest Version](https://img.shields.io/npm/v/bitcoin-qr.svg)](https://npmjs.org/package/bitcoin-qr)
[![npm](https://img.shields.io/npm/dm/bitcoin-qr.svg)](https://www.npmjs.com/package/package-name)

A zero-dependency, zero-framework QR code [web component](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components) for Bitcoin on-chain, Lightning, and [unified BIP-21](https://bitcoinqr.dev/) payments.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Table of Contents

- [Features](#features)
- [Background](#background)
- [Usage](#usage)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
- [Examples](#examples)
- [Conclusion](#conclusion)

## Features

- [x] URI support for Lightning, on-chain, BIP-21
- [x] Poll for payment
- [x] Customizable styles

## Background

When developing a Bitcoin payment flow, there are multiple ways a user can expect to be able to pay. They might want to pay an on-chain address or Lightning invoice, they may be scanning a QR Code from their phone, copy/pasting from a wallet, or using a [WebLN](https://www.webln.guide/) browser extension. Creating an intuitive interface that also captures all the possible ways a user can pay is one of the fundamental UX challenges of developing an application that can receive payments in Bitcoin.

This flexibility opens up many [exciting use cases](https://brandonlucas.net/articles/bitcoin/micropayments), but often comes at the cost of being able to easily develop a smooth experience for the user. The greater the developer's cognitive load, the more difficult it is to create intuitive UX.

This project aims to provide everything needed to allow standard Bitcoin & Lightning Network payments out of the box. It handles creating the proper [URIs](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) from just an address or invoice, and favors creating unified URIs whenever possible. Styles are highly customizable and images can be embedded. It also includes polling functionality -- a callback can be passed as a property of the element to periodicaly check for payment.

🚧 Work in progress 🚧

See the [Roadmap]()

## Installation

#### CDN

```html
<script type="module" src="https://unpkg.com/bitcoin-qr@1.1.0/dist/bitcoin-qr/bitcoin-qr.esm.js"></script>
```

#### NPM

```bash
yarn add bitcoin-qr
```

## Usage

To get the first image above:

```html
<!doctype html>
<html lang="en">
  <head>
    <script type="module" src="https://unpkg.com/bitcoin-qr@1.1.0/dist/bitcoin-qr/bitcoin-qr.esm.js"></script>
  </head>
  <body>
    <bitcoin-qr
      id="qr"
      width="300"
      height="300"
      bitcoin="BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U"
      parameters="?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday"
      image="https://voltage.imgix.net/Team.png?fm=webp&w=160"
      type="svg"
      corners-square-color="#b23c05"
      corners-dot-color="#e24a04"
      corners-square-type="extra-rounded"
      dots-type="classy-rounded"
      dots-color="#ff5000"
    />
  </body>
</html>
```

#### More Examples

- [Sveltekit (source)]()
- [Poll for payment (source)]()

## API Reference

#### Base attributes:

| Attribute       | Type      | Description                                                                                                                                                                            | Default | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :-------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `unified`       | `string`  | **Optional**. A [BIP-21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) URI                                                                                           |         | bitcoin:BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6 |
| `bitcoin`       | `string`  | **Optional**. A bitcoin address                                                                                                                                                        |         | BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `lightning`     | `string`  | **Optional**. A Lightning invoice ([BOLT-11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md)) or offer ([BOLT-12](https://github.com/lightning/bolts/pull/798)) |         | LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6                                                                                                                                                      |
| `parameters`    | `string`  | **Optional**. A query string. Must be parseable by [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)                                                 |         | ?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday                                                                                                                                                                                                                                                                                                                                                                            |
| `is-polling`    | `boolean` | **Optional**. A boolean value indicating whether the component should continue polling                                                                                                 | `false` |                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `poll-interval` | `number`  | **Optional**. The frequency at which to poll in milliseconds                                                                                                                           | `5000`  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

At least one of `unified`, `bitcoin`, or `lightning` must be defined in order for the QR Code to render. All Bitcoin addresses and Lightning invoices will be prepended with `bitcoin:` and `lightning:` URIs, respectively. If both `bitcoin` and `lightning` are defined, a unified string of the format `bitcoin:<ADDRESS>?lightning=<INVOICE>` will be passed to the QR Code. If `unified` is defined, `bitcoin` and `lightning` are ignored. Whatever is passed to `parameters` will be appended to the unified string, whether it was provided via the `unified` attribute or created from the `bitcoin` & `lightning` params.

NOTE: There is currently no validation for the `unified`, `bitcoin`, `lightning`, or `parameters` fields. This is currently on the [roadmap](#roadmap). Validate what you're passing in!

#### Callback

`<bitcoin-qr />` can also be given a `callback` property which it will poll at a given `poll-interval`

#### Styles

This component is built on top of [qr-code-styling](https://github.com/kozakdenys/qr-code-styling), and surfaces the majority of its' [API](https://github.com/kozakdenys/qr-code-styling?tab=readme-ov-file#api-documentation):

Currently, only `Gradient` styling options are not included.

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Roadmap

- [ ] Address, invoice, BIP-21, and parameter validation
- [ ] Add tests
- [ ] Click to copy
- [ ] WebLN support
- [ ] Add remaining [qr-code-styling](https://github.com/kozakdenys/qr-code-styling) properties (gradients)

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Demo

Check out the [Storybook](https://storybook.js.org/) demo [here]().

## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2
