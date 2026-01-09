'use client';

import ContactsModal from '@/components/modals/ContactsModal';
import {Button} from '@/components/ui/Button';
import generalData from '@/shared/data/general.data';
import locales from '@/shared/locales';
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
              href="/"
              className="shrink-0 group"
            >
              <Image
                src="/logo.svg"
                alt={locales.layout.header.logo}
                width={100}
                height={100}
                className="aspect-square size-12 opacity-40 group-hover:opacity-100 def-transition"
              />
            </Link>

            <div className="flex items-center gap-4">
              <a
                href={generalData.files.cv}
                className="def-transition opacity-40 hover:opacity-100"
                target="_blank"
              >
                {locales.layout.header.cv}
              </a>

              <a
                href={generalData.files.presentation}
                className="def-transition opacity-40 hover:opacity-100"
                target="_blank"
              >
                {locales.layout.header.presentation}
              </a>

              <Button
                variant="curtain-up"
                onClick={() => setContactsModalIsOpen(true)}
              >
                {locales.layout.header.contact}
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
