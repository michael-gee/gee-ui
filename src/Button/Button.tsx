import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'cva';
import { cn } from '../utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-md text-sm font-medium text-[var(--foreground)] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm hover:bg-[var(--primary)]/90',
        destructive:
          'bg-[var(--destructive)] text-[var(--destructive-foreground)] shadow-xs hover:bg-[var(--destructive)]/90',
        outline:
          'border border-[var(--input)] bg-[var(--background)] shadow-xs hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]',
        secondary: 'bg-[var(--secondary)] text-[var(--secondary-foreground)] shadow-xs hover:bg-[var(--secondary)]/80',
        ghost: 'hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]',
        link: 'text-[var(--primary)] underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';

enum ButtonVariants {
  DEFAULT = 'default',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  DESTRUCTIVE = 'destructive',
  GHOST = 'ghost',
  LINK = 'link'
}

enum ButtonSizes {
  DEFAULT = 'default',
  SM = 'sm',
  LG = 'lg',
  ICON = 'icon'
}

export { Button, buttonVariants, ButtonVariants, ButtonSizes };
export type { ButtonProps };
