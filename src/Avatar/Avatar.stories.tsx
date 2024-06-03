import { Avatar, AvatarImage, AvatarFallback } from './';
import mdx from './Avatar.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

const meta = {
  title: 'Avatar',
  component: Avatar,
  subcomponents: {
    AvatarImage,
    AvatarFallback
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
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export const DarkMode = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
DarkMode.storyName = 'Default (Dark)';
DarkMode.parameters = { ...darkModeParams, layout: 'centered' };
DarkMode.decorators = [withDarkMode];

export const Fallback = () => {
  return (
    <Avatar>
      <AvatarImage src="asdfgasdf" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export const DarkModeFallback = () => {
  return (
    <Avatar>
      <AvatarImage src="asdfgasdfg" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
DarkModeFallback.storyName = 'Fallback (Dark)';
DarkModeFallback.parameters = darkModeParams;
DarkModeFallback.decorators = [withDarkMode];
