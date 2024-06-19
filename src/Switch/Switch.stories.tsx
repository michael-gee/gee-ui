import { Switch } from './';
import { Label } from '../Label';
import mdx from './Switch.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Switch',
  component: Switch,
  parameters: {
    docs: {
      page: mdx
    },
    backgrounds: { disable: true }
  }
} satisfies Meta<typeof Switch>;

export default meta;

export const Default = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
};

export const DarkMode = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
