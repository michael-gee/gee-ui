import { create } from '@storybook/theming/create';
import packageJSON from './../package.json';

export default create({
  base: 'dark',
  brandTitle: `@gee-ui/react@${packageJSON.version}`,
  brandUrl: 'https://gee-ui.com',
  // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self'
});
