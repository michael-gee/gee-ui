import { Tabs, TabsList, TabsTrigger, TabsContent } from './';
import mdx from './Tabs.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

const meta = {
  title: 'Tabs',
  component: Tabs,
  subcomponents: { TabsList, TabsTrigger, TabsContent },
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
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="w-[400px]">
        <TabsTrigger value="account" className="w-full">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="w-full">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export const DarkMode = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="w-[400px]">
        <TabsTrigger value="account" className="w-full">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="w-full">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
