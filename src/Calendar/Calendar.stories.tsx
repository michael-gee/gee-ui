import { Calendar } from './';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: 'A date field component that allows users to enter and edit date.'
      }
    },
    layout: 'centered',
    backgrounds: { disable: true }
  },
  tags: ['autodocs'],
  argTypes: {},

  args: {}
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: 'rounded-md border'
  }
};

export const PrimaryDark: Story = {
  name: 'Primary (Dark)',
  args: {
    className: 'rounded-md border'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};
