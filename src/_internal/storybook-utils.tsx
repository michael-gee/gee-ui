import { cn } from '../utils';
import type { StoryFn, StoryContext } from '@storybook/react';

export const withDarkMode = (Story: StoryFn, context: StoryContext) => {
  return (
    <div className="dark">
      <Story {...context} />
    </div>
  );
};

export const darkModeParams = {
  backgrounds: {
    disable: false,
    default: 'dark',
    values: [{ name: 'dark', value: '#000' }]
  }
};

export const DarkModeContainer = (props: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn('dark', props.className)} style={{ background: '#000', padding: '24px 16px' }}>
      {props.children}
    </div>
  );
};
