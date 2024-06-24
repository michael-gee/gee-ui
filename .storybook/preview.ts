import type { Preview } from '@storybook/react';
import '../src/tailwind.css';
import '../src/_internal/storybook.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Getting Started', '*']
      }
    }
  }
};

export default preview;
