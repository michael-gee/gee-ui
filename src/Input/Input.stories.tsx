import { Input } from './';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Displays a form input field or a component that looks like an input field.'
      }
    },
    layout: 'centered',
    backgrounds: { disable: true }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'string',
      control: {
        type: 'select'
      },
      description: 'The type of input field. Supports all html input types',
      defaultValue: 'text',
      options: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'file',
        'date',
        'time',
        'datetime-local',
        'month',
        'week',
        'url',
        'search',
        'color',
        'range',
        'hidden',
        'checkbox',
        'radio',
        'submit',
        'reset'
      ]
    },
    placeholder: {
      type: 'string',
      description: 'The placeholder text'
    },
    disabled: {
      type: 'boolean',
      description: 'Whether the input field is disabled'
    }
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your name'
  }
};

export const DarkMode: Story = {
  name: 'Default (Dark)',
  args: {
    type: 'email',
    placeholder: 'Enter your email'
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const File: Story = {
  args: {
    type: 'file',
    placeholder: 'No file chosen'
  }
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'I am disabled',
    disabled: true
  }
};

export const DisabledDark: Story = {
  name: 'Disabled (Dark)',
  args: {
    type: 'text',
    placeholder: 'I am disabled',
    disabled: true
  },
  parameters: darkModeParams,
  decorators: [withDarkMode]
};

export const Label: Story = {
  name: 'Label (WIP)',
  args: {
    type: 'text',
    placeholder: 'Relies on the <Label />'
  }
};
