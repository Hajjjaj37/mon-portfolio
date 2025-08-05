import React, { useState, useRef } from 'react';
import './experience.css';
import { FaLaptopCode, FaBuilding, FaMobile, FaPalette, FaCode, FaDatabase, FaServer, FaGlobe, FaDesktop, FaChartLine } from 'react-icons/fa';
import { MdWork, MdWeb, MdPhoneAndroid, MdDesignServices } from 'react-icons/md';
import { SiReact, SiLaravel, SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql, SiBootstrap, SiGit, SiFigma } from 'react-icons/si';
import { useTranslation } from '../../translations/translations';

const Experience = ({ currentLanguage = 'fr' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef({});

  // Obtenir les traductions pour la langue actuelle
  const t = useTranslation(currentLanguage);

  const handleMouseMove = (e, cardId) => {
    const card = cardRefs.current[cardId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -15;
    const rotateY = (x - centerX) / centerX * 15;
    
    setMousePosition({ x: rotateY, y: rotateX });
    
    // Mettre à jour les variables CSS pour l'effet 3D
    card.style.setProperty('--tilt-x', `${rotateX}deg`);
    card.style.setProperty('--tilt-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (cardId) => {
    const card = cardRefs.current[cardId];
    if (!card) return;
    
    // Reset les variables CSS
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  };

  const experiences = [
    {
      id: 1,
      title: currentLanguage === 'fr' ? "Développeur Web Freelance" : "Freelance Web Developer",
      period: currentLanguage === 'fr' ? "Janvier 2024 – Aujourd'hui" : "January 2024 – Present",
      icon: <MdWork className="experience-icon" />,
      description: currentLanguage === 'fr' ? [
        "Création de sites web vitrines, e-commerce, portfolios et applications web complètes.",
        "Développement d'applications mobiles hybrides avec React Native et Flutter.",
        "Conception et création de logos, identités visuelles et maquettes UI/UX.",
        "Développement de solutions e-commerce avec gestion des paiements et stocks.",
        "Optimisation SEO et performance des sites web pour améliorer le référencement.",
        "Maintenance et support technique pour les clients existants."
      ] : [
        "Creation of showcase websites, e-commerce, portfolios and complete web applications.",
        "Development of hybrid mobile applications with React Native and Flutter.",
        "Design and creation of logos, visual identities and UI/UX mockups.",
        "Development of e-commerce solutions with payment and inventory management.",
        "SEO optimization and website performance to improve search engine ranking.",
        "Maintenance and technical support for existing clients."
      ],
      platforms: ["Fiverr", "Upwork", "Freelancer"],
      webCreationImages: [
        {
          src: "/gestionscolaire.jpg",
          alt: currentLanguage === 'fr' ? "Gestion Scolaire" : "School Management",
          id: "gestion-scolaire-card",
          title: currentLanguage === 'fr' ? "Gestion Scolaire" : "School Management",
          icon: <FaDesktop className="overlay-icon" />
        },
        {
          src: "/gestion.png",
          alt: currentLanguage === 'fr' ? "Gestion" : "Management",
          id: "gestion-card",
          title: currentLanguage === 'fr' ? "Système de Gestion" : "Management System",
          icon: <FaChartLine className="overlay-icon" />
        },
        {
          src: "/vitrine.jpg",
          alt: currentLanguage === 'fr' ? "Site Vitrine" : "Showcase Site",
          id: "vitrine-card",
          title: currentLanguage === 'fr' ? "Site Vitrine" : "Showcase Site",
          icon: <FaGlobe className="overlay-icon" />
        }
      ],
      type: "freelance"
    },
    {
      id: 2,
      title: currentLanguage === 'fr' ? "Stagiaire Développeur Web" : "Web Developer Intern",
      period: currentLanguage === 'fr' ? "Mars 2025 – Mai 2025" : "March 2025 – May 2025",
      company: "WebTech Solutions",
      icon: <FaBuilding className="experience-icon" />,
      description: currentLanguage === 'fr' ? [
        "Participation au développement d'un tableau de bord analytique avancé.",
        "Intégration d'API REST complexes et développement frontend en React.",
        "Travail en équipe agile avec méthodologie Scrum et daily standups.",
        "Développement de composants réutilisables et optimisation des performances.",
        "Tests unitaires et d'intégration pour assurer la qualité du code.",
        "Documentation technique et formation des nouveaux développeurs."
      ] : [
        "Participation in the development of an advanced analytical dashboard.",
        "Integration of complex REST APIs and React frontend development.",
        "Agile team work with Scrum methodology and daily standups.",
        "Development of reusable components and performance optimization.",
        "Unit and integration testing to ensure code quality.",
        "Technical documentation and training of new developers."
      ],
      type: "stage"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className={`experience-card ${exp.type}`}>
              <div className="card-header">
                <div className="icon-container">
                  {exp.icon}
                </div>
                <div className="title-container">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-period">{exp.period}</p>
                  {exp.company && (
                    <p className="company-name">{exp.company}</p>
                  )}
                </div>
              </div>
              
              <div className="card-content">
                <ul className="description-list">
                  {exp.description.map((item, index) => (
                    <li key={index} className="description-item">
                      {item}
                    </li>
                  ))}
                </ul>
                
                {exp.webCreationImages && (
                  <div className="web-creation-overlay">
                    <div className="web-creation-images">
                      {exp.webCreationImages.map((image, index) => (
                        <div
                          key={index}
                          ref={(el) => cardRefs.current[image.id] = el}
                          className="web-creation-image-card"
                          onMouseMove={(e) => handleMouseMove(e, image.id)}
                          onMouseLeave={() => handleMouseLeave(image.id)}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          <div className="image-card-inner">
                            <img src={image.src} alt={image.alt} />
                            <div className="shine-effect"></div>
                            
                            {/* Particules flottantes */}
                            <div className="particles">
                              <div className="particle"></div>
                              <div className="particle"></div>
                              <div className="particle"></div>
                              <div className="particle"></div>
                            </div>
                            
                            {/* Overlay avec titre et icône */}
                            <div className="image-overlay">
                              <div className="overlay-content">
                                {image.icon}
                                <div className="overlay-title">{image.title}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {exp.platforms && (
                <div className="platforms">
                  <h4>{currentLanguage === 'fr' ? 'Plateformes :' : 'Platforms:'}</h4>
                  <div className="platform-tags">
                    {exp.platforms.map((platform, index) => (
                      <span key={index} className="platform-tag">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="card-footer">
                <div className="project-preview">
                  <FaLaptopCode className="preview-icon" />
                  <span>{currentLanguage === 'fr' ? 'Voir les projets' : 'View projects'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
