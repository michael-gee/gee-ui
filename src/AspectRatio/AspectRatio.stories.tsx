import { AspectRatio } from './';
import mdx from './AspectRatio.mdx';

import type { Meta } from '@storybook/react';

const meta = {
  title: 'AspectRatio',
  component: AspectRatio,
  parameters: {
    docs: {
      page: mdx
    },
    layout: 'centered',
    backgrounds: { disable: true }
  },
  argTypes: {
    ratio: {
      type: 'number',
      control: {
        type: 'number'
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof AspectRatio>;

export default meta;

export const Default = () => {
  return (
    <div className="w-[300px] overflow-hidden rounded">
      <AspectRatio ratio={16 / 9}>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        />
      </AspectRatio>
    </div>
  );
};
