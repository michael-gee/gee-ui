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
