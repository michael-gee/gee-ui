import { Textarea } from './';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: 'Displays a form textarea or a component that looks like a textarea.'
      }
    },
    backgrounds: { disable: true }
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Textarea>;

export default meta;

export const Default = () => {
  return <Textarea placeholder="Type your message here." />;
};

export const DarkMode = () => {
  return <Textarea placeholder="Type your message here." />;
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
