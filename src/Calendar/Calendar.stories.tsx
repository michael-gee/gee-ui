import { Calendar } from './';
import { useState } from 'react';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import mdx from './Calendar.mdx';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Calendar',
  component: Calendar,
  parameters: {
    docs: {
      page: mdx
    },
    layout: 'centered',
    backgrounds: { disable: true }
  },
  argTypes: {},

  args: {}
} satisfies Meta<typeof Calendar>;

export default meta;

export const Default = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
};

export const DarkMode = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
