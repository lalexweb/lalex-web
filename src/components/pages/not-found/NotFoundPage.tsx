import {Button} from '@/components/ui/Button';
import locales from '@/shared/locales';
import Image from 'next/image';
import Link from 'next/link';
import {HiChevronLeft} from 'react-icons/hi';

export default function NotFoundPage() {
  return (
    <section className="h-[calc(100vh-128px)] overflow-hidden pb-16 relative">
      <div className="container h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="text-center flex flex-col items-center gap-2 max-w-2xl">
            <div className="relative">
              <Image
                src="/logo.svg"
                alt={locales.pages.notFound.title}
                width={200}
                height={200}
                className="aspect-square shrink-0 max-w-[200px] w-full opacity-20"
                priority
                fetchPriority="high"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-4xl md:text-6xl text-warning">{locales.pages.notFound.title}</h2>

              <p className="text-muted max-w-lg">{locales.pages.notFound.description}</p>
            </div>

            <Button
              as={Link}
              href="/"
              size="lg"
              className="group"
            >
              <HiChevronLeft className="size-4 aspect-square shrink-0 group-hover:-translate-x-1 def-transition" />
              {locales.pages.notFound.actions.returnHome}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
