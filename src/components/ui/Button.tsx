import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';
import * as React from 'react';

import {cn} from '@/shared/lib/utils';
import {HiArrowRight} from 'react-icons/hi';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium def-transition disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        'curtain-up': 'relative overflow-hidden bg-white text-foreground shadow-xs',
        'curtain-down': 'relative overflow-hidden bg-white text-foreground shadow-xs',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
  asChild?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'> &
  VariantProps<typeof buttonVariants>;

function Button<T extends React.ElementType = 'button'>({className, variant, size, as, asChild = false, children, ...props}: ButtonProps<T>) {
  const Comp = asChild ? Slot : as || 'button';

  if (variant === 'curtain-up' || variant === 'curtain-down') {
    const isDown = variant === 'curtain-down';

    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({variant, size, className}))}
        {...props}
      >
        <span className="opacity-0 px-4 py-1">{children}</span>

        <div className={cn('absolute top-0 left-0 w-full h-full z-10 px-4 py-1 bg-primary text-primary-foreground rounded-md def-transition flex items-center justify-center', isDown ? 'hover:transform hover:-translate-y-full' : 'group-hover:transform group-hover:-translate-y-full')}>{children}</div>

        <HiArrowRight className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 text-primary transition-transform duration-800 aspect-square flex-shrink-0 size-6', isDown ? '-translate-y-24 group-hover:-translate-y-1/2' : 'translate-y-24 group-hover:-translate-y-1/2')} />
      </Comp>
    );
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({variant, size, className}))}
      {...props}
    >
      {children}
    </Comp>
  );
}

export {Button, buttonVariants};
export type {ButtonProps};
