import { Progress } from './';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
      }
    },
    backgrounds: { disable: true }
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      type: 'number',
      description: 'The value of the progress bar',
      control: {
        type: 'range',
        min: 0,
        max: 100
      }
    }
  }
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 33
  }
};

export const DarkMode: Story = {
  args: {
    value: 33
  }
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
