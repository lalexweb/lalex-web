'use client';

import {ContactsModal} from '@/components/modals/ContactsModal';
import {Button} from '@/components/ui/Button';
import PAGES from '@/shared/config/pages.config';
import generalData from '@/shared/data/general.data';
import LOCALES from '@/shared/locales';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

export default function Header() {
  const [contactsModalIsOpen, setContactsModalIsOpen] = useState(false);

  return (
    <>
      <header className="z-20 h-16 bg-background sticky top-0">
        <div className="container h-full">
          <div className="flex items-center justify-between gap-2 h-full">
            <Link
              href={PAGES.home}
              className="shrink-0 group"
            >
              <Image
                src="/logo.svg"
                alt={LOCALES.layout.header.logo}
                width={100}
                height={100}
                className="aspect-square size-12 opacity-40 group-hover:opacity-100 def-transition"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href={generalData.files.cv}
                className="def-transition opacity-40 hover:opacity-100"
                target="_blank"
              >
                {LOCALES.layout.header.cv}
              </Link>

              <Link
                href={generalData.files.presentation}
                className="def-transition opacity-40 hover:opacity-100"
                target="_blank"
              >
                {LOCALES.layout.header.presentation}
              </Link>

              <Button
                variant="curtain-up"
                onClick={() => setContactsModalIsOpen(true)}
              >
                {LOCALES.layout.header.contact}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <ContactsModal
        open={contactsModalIsOpen}
        onOpenChange={setContactsModalIsOpen}
      />
    </>
  );
}
