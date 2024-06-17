import { ScrollArea, ScrollBar } from './';
import mdx from './ScrollArea.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

const meta = {
  title: 'ScrollArea',
  component: ScrollArea,
  subcomponents: {
    ScrollBar
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

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Default = () => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4 text-foreground">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map(tag => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            {/* @@@ TODO: add Separator */}
            {/* <Separator className="my-2" /> */}
          </>
        ))}
      </div>
    </ScrollArea>
  );
};

export const DarkMode = () => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4 text-foreground">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map(tag => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            {/* @@@ TODO: add Separator */}
            {/* <Separator className="my-2" /> */}
          </>
        ))}
      </div>
    </ScrollArea>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
