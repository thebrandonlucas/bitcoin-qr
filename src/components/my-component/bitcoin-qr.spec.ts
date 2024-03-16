import { newSpecPage } from '@stencil/core/testing';
import { BitcoinQR } from './bitcoin-qr';

describe('bitcoin-qr', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BitcoinQR],
      html: '<bitcoin-qr></bitcoin-qr>',
    });
    expect(root).toEqualHtml(`
      <bitcoin-qr>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </bitcoin-qr>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [BitcoinQR],
      html: `<bitcoin-qr first="Stencil" last="'Don't call me a framework' JS"></bitcoin-qr>`,
    });
    expect(root).toEqualHtml(`
      <bitcoin-qr first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </bitcoin-qr>
    `);
  });
});
