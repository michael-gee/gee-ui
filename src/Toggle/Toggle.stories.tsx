import { Toggle } from './';
import { Bold, Italic, Underline } from 'lucide-react';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'A two-state button that can be either on or off.'
      }
    },
    backgrounds: { disable: true }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Toggle>;

export default meta;

export const Default = () => {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="size-4" />
    </Toggle>
  );
};

export const DarkMode = () => {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="size-4" />
    </Toggle>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];

export const WithText = () => {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="mr-2 size-4" />
      <span>Italic</span>
    </Toggle>
  );
};
export const WithTextDark = () => {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="mr-2 size-4" />
      <span>Italic</span>
    </Toggle>
  );
};
WithTextDark.storyName = 'With Text (Dark)';
WithTextDark.parameters = darkModeParams;
WithTextDark.decorators = [withDarkMode];

export const Small = () => {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic className="size-4" />
    </Toggle>
  );
};
export const SmallDark = () => {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic className="size-4" />
    </Toggle>
  );
};
SmallDark.storyName = 'Small (Dark)';
SmallDark.parameters = darkModeParams;
SmallDark.decorators = [withDarkMode];

export const Large = () => {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic className="size-4" />
    </Toggle>
  );
};
export const LargeDark = () => {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic className="size-4" />
    </Toggle>
  );
};
LargeDark.storyName = 'Large (Dark)';
LargeDark.parameters = darkModeParams;
LargeDark.decorators = [withDarkMode];

export const Disabled = () => {
  return (
    <Toggle disabled aria-label="Toggle italic">
      <Underline className="size-4" />
    </Toggle>
  );
};
export const DisabledDark = () => {
  return (
    <Toggle disabled aria-label="Toggle italic">
      <Underline className="size-4" />
    </Toggle>
  );
};
DisabledDark.storyName = 'Disabled (Dark)';
DisabledDark.parameters = darkModeParams;
DisabledDark.decorators = [withDarkMode];
