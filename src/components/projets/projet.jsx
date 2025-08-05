import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCar, FaFileAlt, FaShoppingCart, FaGraduationCap, 
  FaStore, FaGlobe, FaBoxes, FaLeaf, FaCode, FaDatabase,
  FaRocket, FaEye, FaGithub, FaExternalLinkAlt
} from 'react-icons/fa';
import { SiReact, SiSpringboot, SiLaravel, SiPhp, SiPython, SiJavascript } from 'react-icons/si';
import { useTranslation } from '../../translations/translations';
import './projet.css';

const Projet = ({ currentLanguage = 'fr' }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Obtenir les traductions pour la langue actuelle
  const t = useTranslation(currentLanguage);

  const projects = [
    {
      id: 1,
      title: currentLanguage === 'fr' ? "Sofac Auto Hall" : "Sofac Auto Hall",
      subtitle: currentLanguage === 'fr' ? "Gestion de fichiers de voitures" : "Car file management",
      description: currentLanguage === 'fr' 
        ? "Application complète de gestion de fichiers automobiles avec authentification JWT, interface moderne et fonctionnalités avancées."
        : "Complete car file management application with JWT authentication, modern interface and advanced features.",
      technologies: ["React.js", "Spring Boot", "JWT", "MySQL"],
      icons: [SiReact, SiSpringboot, FaDatabase],
      category: currentLanguage === 'fr' ? "Web Application" : "Web Application",
      image: "voiture.webp",
      github: "#",
      demo: "#",
      color: "#007bff"
    },
    {
      id: 2,
      title: currentLanguage === 'fr' ? "Gestion de Pôle de Données" : "Data Hub Management",
      subtitle: currentLanguage === 'fr' ? "Projet académique" : "Academic project",
      description: currentLanguage === 'fr'
        ? "Système de gestion de pôle de données académiques avec interface intuitive et gestion des utilisateurs."
        : "Academic data hub management system with intuitive interface and user management.",
      technologies: ["Laravel", "React.js", "MySQL", "PHP"],
      icons: [SiLaravel, SiReact, FaDatabase],
      category: currentLanguage === 'fr' ? "Academic" : "Academic",
      image: "gestionscolaire.jpg",
      github: "#",
      demo: "#",
      color: "#dc3545"
    },
    {
      id: 3,
      title: currentLanguage === 'fr' ? "Site E-commerce" : "E-commerce Site",
      subtitle: currentLanguage === 'fr' ? "Plateforme de vente en ligne" : "Online sales platform",
      description: currentLanguage === 'fr'
        ? "Site e-commerce complet avec gestion des produits, panier d'achat, paiement et administration."
        : "Complete e-commerce site with product management, shopping cart, payment and administration.",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
      icons: [SiLaravel, SiPhp, FaShoppingCart],
      category: currentLanguage === 'fr' ? "E-commerce" : "E-commerce",
      image: "cover.jpg",
      github: "#",
      demo: "#",
      color: "#28a745"
    },
    {
      id: 4,
      title: currentLanguage === 'fr' ? "Site Vitrine" : "Showcase Site",
      subtitle: currentLanguage === 'fr' ? "Site web professionnel" : "Professional website",
      description: currentLanguage === 'fr'
        ? "Site vitrine moderne et responsive avec animations fluides et design épuré."
        : "Modern and responsive showcase site with smooth animations and clean design.",
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5"],
      icons: [SiReact, SiJavascript, FaGlobe],
      category: currentLanguage === 'fr' ? "Web Design" : "Web Design",
      image: "vitrine.jpg",
      github: "#",
      demo: "#",
      color: "#17a2b8"
    },
    {
      id: 5,
      title: currentLanguage === 'fr' ? "Gestion de Stock" : "Stock Management",
      subtitle: currentLanguage === 'fr' ? "Application de gestion d'inventaire" : "Inventory management application",
      description: currentLanguage === 'fr'
        ? "Application de gestion de stock avec suivi des produits, alertes et rapports détaillés."
        : "Stock management application with product tracking, alerts and detailed reports.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      icons: [SiPhp, FaBoxes, FaDatabase],
      category: currentLanguage === 'fr' ? "Business" : "Business",
      image: "gestion.png",
      github: "#",
      demo: "#",
      color: "#ffc107"
    },
    {
      id: 6,
      title: currentLanguage === 'fr' ? "ThinkInter Terrain" : "ThinkInter Terrain",
      subtitle: currentLanguage === 'fr' ? "Gestion des terrains" : "Land management",
      description: currentLanguage === 'fr'
        ? "Application Python pour la gestion et l'optimisation des terrains avec interface graphique moderne."
        : "Python application for land management and optimization with modern graphical interface.",
      technologies: ["Python", "Tkinter", "SQLite", "Pandas"],
      icons: [SiPython, FaLeaf, FaCode],
      category: currentLanguage === 'fr' ? "Desktop" : "Desktop",
      image: "terrain.webp",
      github: "#",
      demo: "#",
      color: "#6f42c1"
    }
  ];

  const categories = currentLanguage === 'fr' 
    ? ["Tous", "Web Application", "Academic", "E-commerce", "Web Design", "Business", "Desktop"]
    : ["All", "Web Application", "Academic", "E-commerce", "Web Design", "Business", "Desktop"];

  const [activeCategory, setActiveCategory] = useState(currentLanguage === 'fr' ? "Tous" : "All");

  const filteredProjects = activeCategory === (currentLanguage === 'fr' ? "Tous" : "All")
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projets" className="projet-section">
      <div className="container">
        <motion.div
          className="projet-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="projet-header">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.projects.title}
            </motion.h2>
            <motion.div
              className="projet-underline"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Filtres par catégorie */}
          <motion.div
            className="projet-filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Grille de projets */}
          <motion.div
            className="projet-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="projet-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: `0 20px 40px ${project.color}20`
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image du projet */}
                <div className="projet-image">
                  {project.image && project.image !== "academic-data.jpg" ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="projet-real-image"
                    />
                  ) : (
                    <div 
                      className="projet-image-placeholder"
                      style={{ backgroundColor: project.color }}
                    >
                      <FaRocket size={40} color="white" />
                    </div>
                  )}
                  <div className="projet-overlay">
                    <div className="projet-links">
                      <motion.a
                        href={project.github}
                        className="projet-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="projet-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Contenu du projet */}
                <div className="projet-content">
                  <div className="projet-category">{project.category}</div>
                  <h3 className="projet-title">{project.title}</h3>
                  <h4 className="projet-subtitle">{project.subtitle}</h4>
                  <p className="projet-description">{project.description}</p>
                  
                  {/* Technologies utilisées */}
                  <div className="projet-technologies">
                    <div className="tech-icons">
                      {project.icons.map((Icon, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          className="tech-icon"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          style={{ color: project.color }}
                        >
                          <Icon size={20} />
                        </motion.div>
                      ))}
                    </div>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal de détail du projet */}
      {selectedProject && (
        <motion.div
          className="projet-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="projet-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-image">
                <div 
                  className="modal-image-placeholder"
                  style={{ backgroundColor: selectedProject.color }}
                >
                  <FaRocket size={60} color="white" />
                </div>
              </div>
              <div className="modal-info">
                <h4>{selectedProject.subtitle}</h4>
                <p>{selectedProject.description}</p>
                <div className="modal-technologies">
                  <h5>{t.projects.technologies} :</h5>
                  <div className="modal-tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="modal-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-links">
                  <a href={selectedProject.demo} className="modal-link">
                    <FaExternalLinkAlt /> {t.projects.viewProject}
                  </a>
                  <motion.a
                    href="https://github.com/Hajjjaj37"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link github-profile-link"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> {currentLanguage === 'fr' ? 'Code source' : 'Source code'}
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projet;
