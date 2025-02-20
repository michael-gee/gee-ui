'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '../utils';
import { buttonVariants } from '../Button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('relative p-3', className)}
      classNames={{
        months: cn('flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0', classNames?.months),
        month: cn('space-y-4 ml-0!', classNames?.month),
        month_caption: cn('flex justify-center pt-1 relative items-center', classNames?.month_caption),
        caption_label: cn('text-sm font-medium', classNames?.caption_label),
        nav: cn('space-x-1 flex items-center', classNames?.nav),
        button_previous: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 absolute left-2 top-2 z-10 opacity-50 hover:opacity-100',
          classNames?.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 absolute right-2 top-2 z-10 opacity-50 hover:opacity-100',
          classNames?.button_next
        ),
        month_grid: cn('w-full border-collapse space-y-1', classNames?.month_grid),
        weekdays: cn('flex', classNames?.weekdays),
        weekday: cn('text-[var(--muted-foreground)] rounded-md w-9 font-normal text-[0.8rem]', classNames?.weekday),
        week: cn('flex w-full mt-2', classNames?.week),
        day: cn(
          'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].range_end)]:rounded-r-md [&:has([aria-selected].outside)]:bg-[var(--accent)]/50 [&:has([aria-selected])]:bg-[var(--accent)] first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          classNames?.day
        ),
        day_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
          classNames?.day_button
        ),
        range_end: cn('range-end', classNames?.range_end),
        selected: cn(
          '[&>button]:bg-[#2055DA] [&>button]:text-white [&>button]:focus:bg-[#2055DA] [&>button]:focus:text-white',
          classNames?.selected
        ),
        today: cn('bg-[var(--accent)] text-[var(--accent-foreground)]', classNames?.today),
        outside: cn(
          'day-outside text-[var(--muted-foreground)] opacity-50 aria-selected:bg-[var(--accent)]/50 aria-selected:text-[var(--muted-foreground)] aria-selected:opacity-30',
          classNames?.outside
        ),
        disabled: cn('text-[var(--muted-foreground)] opacity-50', classNames?.disabled),
        range_middle: cn(
          'aria-selected:bg-[var(--accent)] aria-selected:text-[var(--accent-foreground)]',
          classNames?.range_middle
        ),
        hidden: cn('invisible', classNames?.hidden),
        ...classNames
      }}
      components={{
        Chevron: props => {
          if (props.orientation === 'left') return <ChevronLeft className="h-2 w-2" {...props} />;
          return <ChevronRight className="h-2 w-2" {...props} />;
        }
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
