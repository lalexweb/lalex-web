import generalData from '@/shared/data/general.data';
import projectsData from '@/shared/data/projects.data';
import skillsData from '@/shared/data/skills.data';
import locales from '@/shared/locales';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {ComponentType, CSSProperties} from 'react';
import {FaGithub, FaLinkedin, FaSquareInstagram, FaYoutube} from 'react-icons/fa6';

export default function HomeAboutSection() {
  return (
    <section className={clsx('bg-foreground text-background pb-16', 'lg:h-[calc(100vh-64px)]')}>
      <div className="container">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between gap-2 h-16">
            <h2 className="text-5xl uppercase">{locales.pages.home.about.title}</h2>

            <Link
              href="/"
              className="shrink-0 group"
            >
              <Image
                src="/logo.svg"
                alt={locales.pages.home.about.logo}
                width={100}
                height={100}
                className="aspect-square size-12 opacity-40 group-hover:opacity-100 def-transition"
              />
            </Link>
          </div>

          <p>{locales.pages.home.about.description}</p>

          <div className={clsx('flex gap-10', 'flex-col lg:flex-row lg:items-start')}>
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl">{locales.pages.home.about.mySkills}</h3>

              <div className="flex flex-col gap-2">
                {skillsData.map(skill => (
                  <SkillItem
                    key={skill.name}
                    {...skill}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-4xl">{locales.pages.home.about.latestProjects}</h3>

                <div className={clsx('gap-2 flex-wrap', 'grid md:flex grid-cols-5 sm:grid-cols-8')}>
                  {projectsData.map(project => (
                    <a
                      key={project.link}
                      href={project.link}
                      target="_blank"
                      className="shrink-0 group"
                    >
                      <Image
                        src={project.image}
                        alt={project.image}
                        width={100}
                        height={100}
                        className={clsx('object-cover aspect-square def-transition group-hover:scale-110', 'size-full md:size-20')}
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-4xl">{locales.pages.home.about.findMeOn}</h3>

                <div className={clsx('gap-2 flex-wrap', 'grid md:flex grid-cols-5 sm:grid-cols-8')}>
                  <a
                    href={generalData.socials.linkedin}
                    target="_blank"
                    className="shrink-0 group"
                  >
                    <FaLinkedin className={clsx('aspect-square text-background/80 group-hover:text-primary def-transition', 'size-full md:size-20')} />
                  </a>

                  <a
                    href={generalData.socials.instagram}
                    target="_blank"
                    className="shrink-0 group"
                  >
                    <FaSquareInstagram className={clsx('aspect-square text-background/80 group-hover:text-primary def-transition', 'size-full md:size-20')} />
                  </a>

                  <a
                    href={generalData.socials.github}
                    target="_blank"
                    className="shrink-0 group"
                  >
                    <FaGithub className={clsx('aspect-square text-background/80 group-hover:text-primary def-transition', 'size-full md:size-20')} />
                  </a>

                  <a
                    href={generalData.socials.youtube}
                    target="_blank"
                    className="shrink-0 group"
                  >
                    <FaYoutube className={clsx('aspect-square text-background/80 group-hover:text-primary def-transition', 'size-full md:size-20')} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillItemProps {
  icon: ComponentType<{className?: string; style?: CSSProperties}>;
  iconColor: string;
  name: string;
  level: number;
  levelColor: string;
}

function SkillItem({...item}: SkillItemProps) {
  return (
    <div className={clsx('flex gap-1', 'flex-col md:flex-row md:items-center')}>
      <div className={clsx('flex items-center justify-center gap-1 h-10 bg-background text-foreground rounded-md', 'md:w-36')}>
        <item.icon
          className="size-6 aspect-square shrink-0"
          style={{
            color: item.iconColor,
          }}
        />

        <span>{item.name}</span>
      </div>

      <div className={'flex gap-px'}>
        {Array.from({
          length: 10,
        }).map((_, index) => (
          <div
            key={index}
            className={clsx('aspect-square shrink-0 border-2 border-background rounded-md', 'flex-1 size-auto md:size-8')}
            style={{
              backgroundColor: index < item.level ? item.levelColor : 'transparent',
            }}
          />
        ))}
      </div>
    </div>
  );
}
