import MODALS from '@/shared/constants/modals.constants';
import generalData from '@/shared/data/general.data';
import { useCloseModal, useOpenModal } from '@/shared/lib/modals-store';
import LOCALES from '@/shared/locales';
import Link from 'next/link';
import { useCallback } from 'react';
import { FaGithub, FaLinkedin, FaSquareInstagram, FaYoutube } from 'react-icons/fa6';

export const useContactsModal = () => {
  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const openContactsModal = useCallback(() => {
    openModal({
      id: MODALS.CONTACTS,
      title: LOCALES.modals.contacts.title,
      inner: <ContactsModal />,
    });
  }, [openModal]);

  const closeContactsModal = useCallback(() => {
    closeModal(MODALS.CONTACTS);
  }, [closeModal]);

  return {
    openContactsModal,
    closeContactsModal,
  };
};

function ContactsModal() {
  return (
    <div className="flex flex-col gap-4">
      <p>{LOCALES.modals.contacts.description}</p>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <span>{LOCALES.modals.contacts.email}</span>

          <Link
            href={`mailto:${generalData.socials.email}`}
            className="def-transition text-background/80 hover:text-background"
          >
            {generalData.socials.email}
          </Link>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Link
            href={generalData.socials.linkedin}
            target="_blank"
            className="shrink-0 group"
          >
            <FaLinkedin className="aspect-square size-12 def-transition text-background/80 group-hover:text-background" />
          </Link>

          <Link
            href={generalData.socials.instagram}
            target="_blank"
            className="shrink-0 group"
          >
            <FaSquareInstagram className="aspect-square size-12 def-transition text-background/80 group-hover:text-background" />
          </Link>

          <Link
            href={generalData.socials.github}
            target="_blank"
            className="shrink-0 group"
          >
            <FaGithub className="aspect-square size-12 def-transition text-background/80 group-hover:text-background" />
          </Link>

          <Link
            href={generalData.socials.youtube}
            target="_blank"
            className="shrink-0 group"
          >
            <FaYoutube className="aspect-square size-12 def-transition text-background/80 group-hover:text-background" />
          </Link>
        </div>
      </div>
    </div>
  );
}
