import { Toaster, toast } from '.';
import { Button } from '../Button';
import mdx from './Toaster.mdx';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';

const meta = {
  title: 'Toast',
  component: Toaster,
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
    <>
      <Toaster />

      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo')
            }
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
};

export const DarkMode = () => {
  return (
    <>
      <Toaster theme="dark" />

      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo')
            }
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
