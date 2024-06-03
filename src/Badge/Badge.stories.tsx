import { Badge, BadgeVariants } from './';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: { disable: true }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      type: 'string',
      control: {
        type: 'select'
      },
      mapping: BadgeVariants,
      description: 'The variant of the badge',
      options: Object.values(BadgeVariants)
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    variant: 'default'
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Primary Badge'
  }
};

export const PrimaryDark: Story = {
  name: 'Primary (Dark)',
  args: {
    variant: 'default',
    children: 'Primary Badge'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Badge'
  }
};

export const SecondaryDark: Story = {
  name: 'Secondary (Dark)',
  args: {
    variant: 'secondary',
    children: 'Secondary Badge'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Badge'
  }
};

export const DestructiveDark: Story = {
  name: 'Destructive (Dark)',
  args: {
    variant: 'destructive',
    children: 'Destructive Badge'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Badge'
  }
};

export const OutlineDark: Story = {
  name: 'Outline (Dark)',
  args: {
    variant: 'outline',
    children: 'Outline Badge'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};
