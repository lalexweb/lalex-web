const locales = {
  common: {
    close: 'Close',
  },

  layout: {
    header: {
      logo: 'Logo',
      contact: 'Contact',
      cv: 'CV',
      presentation: 'Presentation',
    },

    footer: {
      logo: 'Logo',
      copyrightBrand: 'Alexander Luginin',
    },
  },

  socials: {
    linkedin: 'Linkedin',
    facebook: 'Facebook',
    instagram: 'Instagram',
    github: 'Github',
  },

  modals: {
    contacts: {
      title: 'Get in touch',
      description: "I'm open to new projects, collaborations, and opportunities. If you have an idea or a project in mind, feel free to get in touch!",
      email: 'Email:',
    },
  },

  pages: {
    home: {
      main: {
        logo: 'Logo',
        title: 'Alexander Luginin',
        description: 'Fullstack developer',
      },
      about: {
        title: 'About',
        logo: 'Logo',
        description: (
          <>
            Hi, I&apos;m <span className="text-primary">Alexander Luginin</span>. I&apos;m <span className="text-primary">a Fullstack developer</span> passionate about <span className="text-primary">building products that make people&apos;s lives better</span>. I&apos;m always exploring new
            technologies, following IT trends, and <span className="text-primary">turning bold ideas into real projects</span>.
          </>
        ),
        mySkills: 'My skills',
        latestProjects: 'Latest projects',
        findMeOn: 'Find me on',
      },
    },

    notFound: {
      title: '404',
      description: 'Page not found',
      actions: {
        returnHome: 'Return to home',
      },
    },

    error: {
      title: '500',
      description: 'Server error',
      actions: {
        returnHome: 'Return to home',
      },
    },
  },
} as const;

export default locales;
