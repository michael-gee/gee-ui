import { HoverCard, HoverCardContent, HoverCardTrigger } from './';
import { Button } from '../Button';
import mdx from './HoverCard.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

const meta = {
  title: 'HoverCard',
  component: HoverCard,
  subcomponents: {
    HoverCardContent,
    HoverCardTrigger
  },
  parameters: {
    docs: {
      page: mdx,
      iframeHeight: 1000
    },
    backgrounds: { disable: true },
    layout: 'centered'
  }
};

export default meta;

export const Default = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover</Button>
      </HoverCardTrigger>
      <HoverCardContent>Hello world from your hover card!</HoverCardContent>
    </HoverCard>
  );
};

export const DarkMode = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="font-bold">
          Hover
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>Hello world from your hover card!</HoverCardContent>
    </HoverCard>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
