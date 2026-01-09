'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';

import {cn} from '@/shared/lib/utils';
import locales from '@/shared/locales';
import {HiX} from 'react-icons/hi';

function Dialog({...props}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return (
    <DialogPrimitive.Root
      data-slot="dialog"
      {...props}
    />
  );
}

function DialogTrigger({...props}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return (
    <DialogPrimitive.Trigger
      data-slot="dialog-trigger"
      {...props}
    />
  );
}

function DialogPortal({...props}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return (
    <DialogPrimitive.Portal
      data-slot="dialog-portal"
      {...props}
    />
  );
}

function DialogClose({...props}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      {...props}
    />
  );
}

function DialogOverlay({className, ...props}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn('fixed inset-0 z-50 bg-black/50 flex items-center justify-center', 'data-[state=closed]:animate-out data-[state=closed]:fade-out-0', 'data-[state=open]:animate-in data-[state=open]:fade-in-0', 'def-transition', className)}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  title,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
  title?: string;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay>
        <DialogPrimitive.Content
          data-slot="dialog-content"
          className={cn(
            'bg-primary text-primary-foreground rounded-md p-5 max-w-[950px] w-full flex flex-col',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-2',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-2',
            'def-transition',
            className,
          )}
          {...props}
        >
          {showCloseButton && (
            <div className="flex justify-between items-start w-full">
              <DialogTitle>{title}</DialogTitle>

              <DialogPrimitive.Close
                data-slot="dialog-close"
                className="w-11 h-11 aspect-square bg-foreground text-background rounded-md flex items-center justify-center text-4xl def-transition hover:bg-background hover:text-foreground"
              >
                <HiX className="size-6 aspect-square shrink-0" />

                <span className="sr-only">{locales.common.close}</span>
              </DialogPrimitive.Close>
            </div>
          )}

          {children}
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  );
}

function DialogHeader({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

function DialogFooter({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  );
}

function DialogTitle({className, ...props}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-6xl', className)}
      {...props}
    />
  );
}

function DialogDescription({className, ...props}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

export {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger};
