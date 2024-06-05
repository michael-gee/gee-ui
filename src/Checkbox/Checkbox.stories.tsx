import { Checkbox } from './';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import mdx from './Checkbox.mdx';

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: mdx
    },
    backgrounds: { disable: true },
    layout: 'centered'
  }
};

export const Default = () => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  );
};

export const DarkMode = () => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms2" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms2"
          className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];

export const Disabled = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms3" disabled />
      <label
        htmlFor="terms3"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
};

export const DisabledDark = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms4" disabled />
      <label
        htmlFor="terms4"
        className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
};
DisabledDark.storyName = 'Disabled (Dark)';
DisabledDark.parameters = darkModeParams;
DisabledDark.decorators = [withDarkMode];

export const Form = () => {
  return <p>WIP</p>;
};
Form.storyName = '(WIP) Form';
