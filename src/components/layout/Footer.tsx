'use client';

import PAGES from '@/shared/config/pages.config';
import generalData from '@/shared/data/general.data';
import LOCALES from '@/shared/locales';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaSquareGithub, FaSquareInstagram, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground h-16 shadow-footer">
      <div className="container h-full">
        <div className="flex items-center justify-between gap-2 h-full">
          <div className="flex items-end gap-2">
            <Link
              href={PAGES.home}
              className="shrink-0 group"
            >
              <Image
                src="/logo.svg"
                alt={LOCALES.layout.footer.logo}
                width={100}
                height={100}
                className="aspect-square size-14 opacity-40 group-hover:opacity-100 def-transition brightness-0"
              />
            </Link>

            <div className="flex flex-col text-base">
              <span className="leading-6">{LOCALES.layout.footer.copyrightBrand}</span>

              <span className="leading-6 -mt-3">© {currentYear}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              href={generalData.socials.linkedin}
              className="shrink-0 def-transition opacity-40 hover:opacity-100"
              target="_blank"
            >
              <FaLinkedin className={clsx('aspect-square', 'size-8 md:size-12')} />
            </Link>

            <Link
              href={generalData.socials.instagram}
              className="shrink-0 def-transition opacity-40 hover:opacity-100"
              target="_blank"
            >
              <FaSquareInstagram className={clsx('aspect-square', 'size-8 md:size-12')} />
            </Link>

            <Link
              href={generalData.socials.github}
              className="shrink-0 def-transition opacity-40 hover:opacity-100"
              target="_blank"
            >
              <FaSquareGithub className={clsx('aspect-square', 'size-8 md:size-12')} />
            </Link>

            <Link
              href={generalData.socials.youtube}
              className="shrink-0 def-transition opacity-40 hover:opacity-100"
              target="_blank"
            >
              <FaYoutube className={clsx('aspect-square', 'size-8 md:size-12')} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
