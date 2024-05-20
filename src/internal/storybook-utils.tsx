import type { StoryFn, StoryContext } from '@storybook/react';

export const withDarkMode = (Story: StoryFn, context: StoryContext) => {
  return (
    <div className="dark">
      <Story {...context} />
    </div>
  );
};
