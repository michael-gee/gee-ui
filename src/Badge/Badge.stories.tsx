import { Badge, BadgeVariants } from './';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Badges are used to highlight an item or to display a status. They can be used in a variety of ways, such as to display the number of notifications, the status of an item, or to indicate that an item is new or updated.'
      }
    },
    layout: 'centered',
    backgrounds: { disable: true }
  },
  tags: ['autodocs'],
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
