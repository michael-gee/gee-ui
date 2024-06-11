import { Label } from './';
import { Checkbox } from '../Checkbox';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'Renders an accessible label associated with controls.'
      }
    },
    layout: 'centered',
    backgrounds: { disable: true }
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      type: 'string',
      description: 'The id of the associated control'
    }
  }
} satisfies Meta<typeof Label>;

export default meta;

export const Default = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
};

export const DarkMode = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
