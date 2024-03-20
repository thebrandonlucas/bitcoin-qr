/** @type { import('@storybook/html').Preview } */
import { defineCustomElements } from '../loader';

defineCustomElements();

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
