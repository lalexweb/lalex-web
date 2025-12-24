import {ReactNode} from 'react';
import {create} from 'zustand';

export interface ModalConfig {
  id: string;
  inner: ReactNode;
  isOpen?: boolean;

  title?: string;

  showContactButton?: boolean;
  contentClassName?: string;
}

interface ModalsData {
  modals: ModalConfig[];

  openModal: (modalConfig: ModalConfig) => void;
  updateModal: (modalID: string, updateFunction: (prevModalConfig: ModalConfig) => ModalConfig) => void;

  closeModal: (modalID: string) => void;
  closeAllModals: () => void;
}

export const useModalsData = create<ModalsData>(set => ({
  modals: [],

  openModal: modalConfig =>
    set(state => {
      const existingModalIndex = state.modals.findIndex(modal => modal.id === modalConfig.id);

      if (existingModalIndex !== -1) {
        const updatedModals = [...state.modals];
        updatedModals[existingModalIndex] = {
          ...modalConfig,
          isOpen: true,
        };

        return {
          modals: updatedModals,
        };
      } else {
        return {
          modals: [
            ...state.modals,
            {
              ...modalConfig,
              isOpen: true,
            },
          ],
        };
      }
    }),

  updateModal: (modalID: string, updateFunction: (prevModalConfig: ModalConfig) => ModalConfig) => {
    set(state => ({
      modals: state.modals.map(modal =>
        modal.id === modalID
          ? {
              ...modal,
              ...updateFunction(modal),
            }
          : modal,
      ),
    }));
  },

  closeModal: modalID => {
    set(state => ({
      modals: state.modals.map(modal => ({
        ...modal,
        isOpen: modal.id === modalID ? false : modal.isOpen,
      })),
    }));

    setTimeout(() => {
      set(state => ({
        modals: state.modals.filter(modal => modal.id !== modalID),
      }));
    }, 300);
  },

  closeAllModals: () => {
    set(state => ({
      modals: state.modals.map(modal => ({
        ...modal,
        isOpen: false,
      })),
    }));

    setTimeout(() => {
      set({
        modals: [],
      });
    }, 300);
  },
}));

// HOOKS
export const useModals = () => {
  return useModalsData(selector => selector.modals);
};

export const useOpenModal = () => {
  return useModalsData(selector => selector.openModal);
};

export const useUpdateModal = () => {
  return useModalsData(selector => selector.updateModal);
};

export const useCloseModal = () => {
  return useModalsData(selector => selector.closeModal);
};

export const useCloseAllModals = () => {
  return useModalsData(selector => selector.closeAllModals);
};
