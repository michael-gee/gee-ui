import { Button, ButtonSizes, ButtonVariants } from './';
import { fn } from '@storybook/test';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Buttons are used to perform an action. They can be used in a variety of ways, such as to submit a form, to trigger a modal, or to navigate to another page.'
      }
    },
    layout: 'centered',
    backgrounds: { disable: true }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      control: {
        type: 'select'
      },
      mapping: ButtonSizes,
      description: 'The size of the button',
      options: Object.values(ButtonSizes)
    },
    variant: {
      type: 'string',
      control: {
        type: 'select'
      },
      mapping: ButtonVariants,
      description: 'The variant of the button',
      options: Object.values(ButtonVariants)
    },
    asChild: {
      type: 'boolean',
      description: 'Render as a child component',
      table: {
        disable: true
      }
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    size: 'default',
    variant: 'default',
    onClick: fn()
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Primary Button'
  }
};

export const PrimaryDark: Story = {
  name: 'Primary (Dark)',
  args: {
    variant: 'default',
    children: 'Primary Button'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
};

export const SecondaryDark: Story = {
  name: 'Secondary (Dark)',
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button'
  }
};

export const DestructiveDark: Story = {
  name: 'Destructive (Dark)',
  args: {
    variant: 'destructive',
    children: 'Destructive Button'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
};

export const OutlineDark: Story = {
  name: 'Outline (Dark)',
  args: {
    variant: 'outline',
    children: 'Outline Button'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
};

export const GhostDark: Story = {
  name: 'Ghost (Dark)',
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button'
  }
};

export const LinkDark: Story = {
  name: 'Link (Dark)',
  args: {
    variant: 'link',
    children: 'Link Button'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button'
  },
  parameters: {
    backgrounds: {
      disable: true
    }
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button'
  },
  parameters: {
    backgrounds: {
      disable: true
    }
  }
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
      >
        <path
          d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    )
  },
  parameters: {
    backgrounds: {
      disable: true
    }
  }
};
