# bitcoin-qr

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

When developing a Bitcoin payment flow, there are multiple ways a user can expect to be able to pay. They might want to pay an on-chain address or Lightning invoice, they may be paying by scanning a QR Code from their phone, copy/pasting from a wallet, or via a [WebLN](https://www.webln.guide/) browser extension. Creating an intuitive interface that also captures all the possible ways a user can pay is one of the fundamental UX challenges of developing an application that can receive payments in Bitcoin.

This flexibility opens up many [exciting use cases](https://brandonlucas.net/articles/bitcoin/micropayments), but often comes at the cost of ensuring a smooth experience for the user. The greater the developer's cognitive load, the more difficult it is to create intuitive UX. And if we want Bitcoin to see more adoption, it's crucial to not frighten off would-be users because Bitcoin "doesn't work" or is "too complicated"..

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
      is-polling="true"
      poll-interval="1000"
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

- [Sveltekit]()
- [Poll for payment]()

## API Reference

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

- [ ] Click to copy
- [ ] WebLN support

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
