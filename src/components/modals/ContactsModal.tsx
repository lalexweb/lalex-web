'use client';

import {Dialog, DialogContent} from '@/components/ui/Dialog';
import generalData from '@/shared/data/general.data';
import locales from '@/shared/locales';
import Link from 'next/link';
import {FaGithub, FaLinkedin, FaSquareInstagram, FaYoutube} from 'react-icons/fa6';

interface ContactsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactsModal = ({open, onOpenChange}: ContactsModalProps) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="max-w-[950px] w-full flex flex-col"
        title={locales.modals.contacts.title}
      >
        <div className="flex flex-col gap-4">
          <p>{locales.modals.contacts.description}</p>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span>{locales.modals.contacts.email}</span>

              <Link
                href={`mailto:${generalData.socials.email}`}
                className="def-transition text-background/80 hover:text-background"
              >
                {generalData.socials.email}
              </Link>
            </div>

            <div className="flex gap-2 flex-wrap">
              <a
                href={generalData.socials.linkedin}
                target="_blank"
                className="shrink-0 group"
              >
                <FaLinkedin className="aspect-square size-12 def-transition text-background/80 group-hover:text-background" />
              </a>

              <a
                href={generalData.socials.instagram}
                target="_blank"
                className="shrink-0 group"
              >
                <FaSquareInstagram className="aspect-square size-12 def-transition text-background/80 group-hover:text-background" />
              </a>

              <a
                href={generalData.socials.github}
                target="_blank"
                className="shrink-0 group"
              >
                <FaGithub className="aspect-square size-12 def-transition text-background/80 group-hover:text-background" />
              </a>

              <a
                href={generalData.socials.youtube}
                target="_blank"
                className="shrink-0 group"
              >
                <FaYoutube className="aspect-square size-12 def-transition text-background/80 group-hover:text-background" />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
