// Traductions globales pour le portfolio
export const translations = {
  fr: {
    // Navigation
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
      downloadCV: 'Télécharger CV',
      cvModal: {
        title: 'Mon CV',
        download: 'Télécharger CV'
      },
      tooltips: {
        switchToEnglish: 'Passer en Anglais',
        switchToFrench: 'Switch to French'
      }
    },

    // Section À propos
    about: {
      title: 'À propos de moi',
      subtitle: 'Développeur Full Stack passionné',
      description: 'Je suis un développeur Full Stack passionné par la création d\'applications web modernes et innovantes. Avec une expertise en React, Node.js et diverses technologies web, je transforme vos idées en réalité numérique.',
      skills: 'Compétences',
      experience: 'Années d\'expérience',
      projects: 'Projets réalisés'
    },

    // Section Compétences
    skills: {
      title: 'Mes Compétences',
      subtitle: 'Technologies et outils que je maîtrise',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de données',
        tools: 'Outils'
      }
    },

    // Section Projets
    projects: {
      title: 'Mes Projets',
      subtitle: 'Découvrez mes réalisations récentes',
      all: 'Tous',
      web: 'Web',
      mobile: 'Mobile',
      desktop: 'Desktop',
      viewProject: 'Voir le projet',
      technologies: 'Technologies utilisées',
      description: 'Description',
      features: 'Fonctionnalités',
      challenges: 'Défis',
      solutions: 'Solutions'
    },

    // Section Expérience
    experience: {
      title: 'Mon Expérience',
      subtitle: 'Mon parcours professionnel',
      freelance: 'Freelance',
      stage: 'Stage',
      current: 'Actuellement',
      company: 'Entreprise',
      period: 'Période',
      technologies: 'Technologies'
    },

    // Section Contact
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Prêt à donner vie à vos idées ? Discutons de votre prochain projet !',
      form: {
        name: 'Votre nom',
        email: 'Votre email',
        message: 'Votre message',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
      },
      social: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        email: 'Email',
        facebook: 'Facebook'
      }
    },

    // Footer
    footer: {
      rights: 'Tous droits réservés',
      madeWith: 'Fait avec ❤️ par'
    }
  },

  en: {
    // Navigation
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      downloadCV: 'Download CV',
      cvModal: {
        title: 'My CV',
        download: 'Download CV'
      },
      tooltips: {
        switchToEnglish: 'Passer en Anglais',
        switchToFrench: 'Switch to French'
      }
    },

    // Section About
    about: {
      title: 'About Me',
      subtitle: 'Passionate Full Stack Developer',
      description: 'I am a passionate Full Stack developer dedicated to creating modern and innovative web applications. With expertise in React, Node.js and various web technologies, I transform your ideas into digital reality.',
      skills: 'Skills',
      experience: 'Years of experience',
      projects: 'Completed projects'
    },

    // Section Skills
    skills: {
      title: 'My Skills',
      subtitle: 'Technologies and tools I master',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools'
      }
    },

    // Section Projects
    projects: {
      title: 'My Projects',
      subtitle: 'Discover my recent work',
      all: 'All',
      web: 'Web',
      mobile: 'Mobile',
      desktop: 'Desktop',
      viewProject: 'View project',
      technologies: 'Technologies used',
      description: 'Description',
      features: 'Features',
      challenges: 'Challenges',
      solutions: 'Solutions'
    },

    // Section Experience
    experience: {
      title: 'My Experience',
      subtitle: 'My professional journey',
      freelance: 'Freelance',
      stage: 'Internship',
      current: 'Currently',
      company: 'Company',
      period: 'Period',
      technologies: 'Technologies'
    },

    // Section Contact
    contact: {
      title: 'Contact Me',
      subtitle: 'Ready to bring your ideas to life? Let\'s discuss your next project!',
      form: {
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
      },
      social: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        email: 'Email',
        facebook: 'Facebook'
      }
    },

    // Footer
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with ❤️ by'
    }
  }
};

// Hook personnalisé pour utiliser les traductions
export const useTranslation = (language) => {
  return translations[language] || translations.fr;
}; 