import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './';
import { Button } from '../Button';
import { BellRing, Check } from 'lucide-react';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import mdx from './Card.mdx';

export default {
  title: 'Card',
  component: Card,
  subcomponents: { CardHeader, CardFooter, CardTitle, CardDescription, CardContent },
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
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm leading-none font-medium">Push Notifications</p>
            <p className="text-sm text-[var(--muted-foreground)]">Send notifications to device.</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
};

export const DarkMode = () => {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm leading-none font-medium">Push Notifications</p>
            <p className="text-sm">Send notifications to device.</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
