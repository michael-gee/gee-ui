import { Slider } from './';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'An input where the user selects a value from within a given range.'
      }
    },
    backgrounds: { disable: true }
  },
  tags: ['autodocs'],
  argTypes: {
    step: {
      type: 'number',
      description: 'The step value of the slider'
    },
    min: {
      type: 'number',
      description: 'The minimum value of the slider'
    },
    max: {
      type: 'number',
      description: 'The maximum value of the slider'
    },
    defaultValue: {
      control: 'object', //array
      description: 'The default value of the slider',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[1, 2, 3]' }
      }
    }
    // @@@ WIP
    // orientation: {
    //   description: 'The orientation of the slider',
    //   control: {
    //     type: 'select'
    //   },
    //   options: ['horizontal', 'vertical'],
    //   defaultValue: 'horizontal',
    //   table: {
    //     type: { summary: 'horizontal | vertical' },
    //     defaultValue: { summary: 'horizontal' }
    //   }
    // }
  }
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    step: 1,
    defaultValue: [33],
    max: 100
  }
};

export const DarkMode: Story = {
  args: {
    step: 1,
    defaultValue: [33],
    max: 100
  }
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
