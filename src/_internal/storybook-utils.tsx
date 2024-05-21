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
    values: [{ name: 'dark', value: '#333' }]
  }
};

export const DarkModeContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="dark" style={{ backgroundColor: '#333', padding: '24px 16px' }}>
      {props.children}
    </div>
  );
};
