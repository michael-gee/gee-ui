import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './';
import { Button } from '../Button';
import mdx from './Dialog.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

const meta = {
  title: 'Dialog',
  component: Dialog,
  subcomponents: {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hello World!</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas nisi, tenetur quibusdam id earum
            porro itaque molestias dolor, commodi laboriosam cumque corporis necessitatibus, sunt doloribus nesciunt
            odit ipsam nostrum.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export const DarkMode = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </DialogTrigger>
      <DialogContent className="dark">
        <DialogHeader>
          <DialogTitle>Hello World!</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas nisi, tenetur quibusdam id earum
            porro itaque molestias dolor, commodi laboriosam cumque corporis necessitatibus, sunt doloribus nesciunt
            odit ipsam nostrum.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];

export const WithCustomClose = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hello World</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, maiores autem, vero eaque error
            asperiores in architecto dolorum dolores iusto earum ducimus voluptatum eos? Esse voluptate eaque nihil
            possimus praesentium.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
