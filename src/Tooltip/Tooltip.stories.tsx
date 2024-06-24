import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './';
import { Button } from '../Button';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import mdx from './Tooltip.mdx';

export default {
  title: 'Tooltip',
  component: Tooltip,
  subcomponents: {
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  },
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const DarkMode = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
