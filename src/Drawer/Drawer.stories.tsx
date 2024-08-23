import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription
} from './';
import { Button } from '../Button';
import { Label } from '../Label';
import { Input } from '../Input';
import mdx from './Drawer.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

const meta = {
  title: 'Drawer',
  component: Drawer,
  subcomponents: {
    DrawerPortal,
    DrawerOverlay,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription
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
  const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map(side => (
        <Drawer key={side}>
          <DrawerTrigger asChild>
            <Button variant="outline">{side}</Button>
          </DrawerTrigger>
          <DrawerContent side={side}>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>Make changes to your profile here. Click save when you're done.</DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Michael Gee" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@michaelgee_" className="col-span-3" />
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button type="submit">Save changes</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
};

export const DarkMode = () => {
  const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map(side => (
        <Drawer key={side}>
          <DrawerTrigger asChild>
            <Button variant="outline">{side}</Button>
          </DrawerTrigger>
          <DrawerContent side={side} className="dark">
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>Make changes to your profile here. Click save when you're done.</DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Michael Gee" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@michaelgee_" className="col-span-3" />
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button type="submit">Save changes</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
