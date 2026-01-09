'use client';

import generalData from '@/shared/data/general.data';
import LOCALES from '@/shared/locales';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import {FaLinkedin, FaSquareGithub, FaSquareInstagram, FaYoutube} from 'react-icons/fa6';

const DynamicBackgroundEffects = dynamic(() => import('@/components/pages/home/HomeBackgroundEffects'), {
  ssr: false,
});

export default function HomeMainSection() {
  return (
    <section className="h-[calc(100vh-64px)] overflow-hidden pb-16 relative">
      <DynamicBackgroundEffects />

      <div className="container h-full relative z-10">
        <div className="relative w-full h-full">
          <Image
            src="/logo.svg"
            alt={LOCALES.pages.home.main.logo}
            width={500}
            height={500}
            className="aspect-square shrink-0 max-w-[500px] w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            priority
            fetchPriority="high"
          />

          <div className={clsx('flex flex-col absolute left-0', 'bottom-18 md:bottom-0')}>
            <h1 className="text-4xl md:text-8xl">{LOCALES.pages.home.main.title}</h1>

            <span className="text-2xl md:text-6xl">{LOCALES.pages.home.main.description}</span>
          </div>

          <div className={clsx('flex absolute', 'bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 right-auto md:right-0 left-0 md:left-auto md:flex-col gap-2 md:gap-4')}>
            <Link
              href={generalData.socials.linkedin}
              className="shrink-0 def-transition opacity-40 hover:opacity-100"
              target="_blank"
            >
              <FaLinkedin className={clsx('aspect-square', 'size-16 md:size-20')} />
            </Link>

            <Link
              href={generalData.socials.instagram}
              className="shrink-0 def-transition opacity-40 hover:opacity-100"
              target="_blank"
            >
              <FaSquareInstagram className={clsx('aspect-square', 'size-16 md:size-20')} />
            </Link>

            <Link
              href={generalData.socials.github}
              className="shrink-0 def-transition opacity-40 hover:opacity-100"
              target="_blank"
            >
              <FaSquareGithub className={clsx('aspect-square', 'size-16 md:size-20')} />
            </Link>

            <Link
              href={generalData.socials.youtube}
              className="shrink-0 def-transition opacity-40 hover:opacity-100"
              target="_blank"
            >
              <FaYoutube className={clsx('aspect-square', 'size-16 md:size-20')} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
