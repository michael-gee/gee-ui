import { Popover, PopoverTrigger, PopoverContent } from './';
import { Button } from '../Button';
import mdx from './Popover.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

const meta = {
  title: 'Popover',
  component: Popover,
  subcomponents: {
    PopoverTrigger,
    PopoverContent
  },
  parameters: {
    docs: {
      page: mdx
    },
    backgrounds: { disable: true },
    layout: 'centered'
  }
};

export default meta;

export const Default = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link">Hover</Button>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export const DarkMode = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link">Hover</Button>
      </PopoverTrigger>
      <PopoverContent className="dark">Place content for the popover here.</PopoverContent>
    </Popover>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
