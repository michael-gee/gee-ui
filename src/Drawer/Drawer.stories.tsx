import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from './';
import { Button } from '../Button';
import mdx from './Drawer.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

const meta = {
  title: 'Drawer',
  component: Drawer,
  subcomponents: {
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
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
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Show Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export const DarkMode = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="font-bold">
          Show Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
