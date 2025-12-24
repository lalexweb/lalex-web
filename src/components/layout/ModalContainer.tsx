'use client';

import {Dialog, DialogContent} from '@/components/ui/Dialog';
import {useCloseModal, useModals} from '@/shared/lib/modals-store';

export default function ModalContainer() {
  const modals = useModals();
  const closeModal = useCloseModal();

  return (
    <>
      {modals.map(modal => (
        <Dialog
          key={modal.id}
          open={modal.isOpen}
          onOpenChange={open => {
            if (!open) {
              closeModal(modal.id);
            }
          }}
        >
          <DialogContent
            className={modal.contentClassName}
            title={modal.title}
          >
            {modal.inner}
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
}
