import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload, FaTimesCircle, FaGlobe } from 'react-icons/fa';
import { useTranslation } from '../../translations/translations';
import './navbar.css';

const Navbar = ({ 
  name = "Mohammed Hajjaj", 
  logo = "/logoportfolio-removebg-preview.png",
  onLanguageChange = () => {}, // Callback pour changer la langue
  currentLanguage = 'fr' // Langue actuelle passée depuis le parent
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);

  // Obtenir les traductions pour la langue actuelle
  const t = useTranslation(currentLanguage);

  // Gestion du scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique sur un lien
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  // Ouvrir la modal du CV
  const handleDownloadCV = () => {
    setShowCVModal(true);
    console.log('Ouverture de la modal CV...');
  };

  // Fermer la modal du CV
  const closeCVModal = () => {
    setShowCVModal(false);
  };

  // Télécharger le CV depuis la modal
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/hajjaj mohammed CV.pdf';
    link.download = 'hajjaj mohammed CV.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Téléchargement du CV...');
  };

  // Changer la langue
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    onLanguageChange(newLanguage);
  };

  // Créer les liens de navigation avec les traductions
  const navLinks = [
    { name: t.nav.about, href: '#a-propos' },
    { name: t.nav.skills, href: '#competences' },
    { name: t.nav.projects, href: '#projets' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo/Nom */}
          <motion.div 
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#a-propos" onClick={handleNavLinkClick}>
              {logo ? (
                <img src={logo} alt={name} className="logo-image" />
              ) : (
                <span className="logo-text">{name}</span>
              )}
            </a>
          </motion.div>

          {/* Liens de navigation - Desktop */}
          <div className="navbar-links">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={handleNavLinkClick}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Bouton Télécharger CV - Desktop */}
          <motion.button
            className="download-cv-btn"
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FaDownload size={16} />
            <span>{t.nav.downloadCV}</span>
          </motion.button>

          {/* Bouton Traduction - Desktop */}
          <motion.button
            className="language-toggle-btn"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            title={currentLanguage === 'fr' ? t.nav.tooltips.switchToEnglish : t.nav.tooltips.switchToFrench}
          >
            <FaGlobe size={18} />
            <span className="language-text">{currentLanguage.toUpperCase()}</span>
          </motion.button>

          {/* Menu Burger - Mobile */}
          <motion.button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="navbar-mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-links">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={handleNavLinkClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  className="mobile-download-btn"
                  onClick={handleDownloadCV}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <FaDownload size={18} />
                  <span>{t.nav.downloadCV}</span>
                </motion.button>
                <motion.button
                  className="mobile-language-btn"
                  onClick={toggleLanguage}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.1 }}
                >
                  <FaGlobe size={18} />
                  <span>{currentLanguage === 'fr' ? 'EN' : 'FR'}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modal CV */}
      <AnimatePresence>
        {showCVModal && (
          <motion.div
            className="cv-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCVModal}
          >
            <motion.div
              className="cv-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cv-modal-header">
                <h3>{t.nav.cvModal.title}</h3>
                <button className="cv-modal-close" onClick={closeCVModal}>
                  <FaTimesCircle size={24} />
                </button>
              </div>
              
              <div className="cv-modal-content">
                <iframe
                  src="/hajjaj mohammed CV.pdf"
                  title="CV Hajjaj Mohammed"
                  className="cv-preview"
                />
              </div>
              
              <div className="cv-modal-footer">
                <motion.button
                  className="cv-download-btn"
                  onClick={downloadCV}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload size={18} />
                  <span>{t.nav.cvModal.download}</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
