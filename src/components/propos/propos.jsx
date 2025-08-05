import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaCode, FaLaptop, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import { useTranslation } from '../../translations/translations';
import './propos.css';

const Propos = ({ currentLanguage = 'fr' }) => {
  // Obtenir les traductions pour la langue actuelle
  const t = useTranslation(currentLanguage);

  // Configuration des icônes avec des trajectoires plus complexes
  const techIcons = [
    { icon: FaJava, delay: 0, duration: 12, color: "#ED8B00" },
    { icon: SiSpringboot, delay: 1.5, duration: 10, color: "#6DB33F" },
    { icon: FaReact, delay: 3, duration: 14, color: "#61DAFB" },
    { icon: FaHtml5, delay: 4.5, duration: 8, color: "#E34F26" },
    { icon: FaCss3Alt, delay: 6, duration: 11, color: "#1572B6" },
    { icon: FaJs, delay: 7.5, duration: 9, color: "#F7DF1E" },
    { icon: SiMysql, delay: 9, duration: 13, color: "#4479A1" },
    { icon: FaDatabase, delay: 10.5, duration: 7, color: "#336791" }
  ];

  // Particules flottantes
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    duration: 8 + Math.random() * 4
  }));

  return (
    <section id="a-propos" className="propos-section">
      {/* Particules de fond */}
      <div className="background-particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.3, 0.6, 0.3, 0],
              scale: [0, 1, 1.5, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div
          className="propos-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="propos-header">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.about.title}
            </motion.h2>
            <motion.div
              className="propos-underline"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="propos-body">
            <div className="propos-image-container">
              {/* Ondes lumineuses autour de l'image */}
              <div className="light-waves">
                {[1, 2, 3].map((wave) => (
                  <motion.div
                    key={wave}
                    className="light-wave"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 0],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: wave * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              <motion.div
                className="propos-image-wrapper"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src="/WhatsApp Image 2025-08-04 at 13.05.02.jpeg"
                  alt="Mohammed Hajjaj"
                  className="propos-image"
                  whileHover={{ 
                    filter: "brightness(1.1) contrast(1.1)",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icônes volantes avec trajectoires orbitales */}
                <div className="flying-icons-container">
                  {techIcons.map((tech, index) => {
                    const IconComponent = tech.icon;
                    const angle = (index * 45) * (Math.PI / 180);
                    const radius = 120 + (index % 3) * 30;
                    
                    return (
                      <motion.div
                        key={index}
                        className="flying-icon"
                        style={{ '--icon-color': tech.color }}
                        initial={{ 
                          x: Math.cos(angle) * radius,
                          y: Math.sin(angle) * radius,
                          opacity: 0,
                          scale: 0,
                          rotate: 0
                        }}
                        animate={{
                          x: [
                            Math.cos(angle) * radius,
                            Math.cos(angle + Math.PI/4) * (radius * 0.8),
                            Math.cos(angle + Math.PI/2) * (radius * 0.6),
                            Math.cos(angle + Math.PI*3/4) * (radius * 0.8),
                            Math.cos(angle + Math.PI) * radius
                          ],
                          y: [
                            Math.sin(angle) * radius,
                            Math.sin(angle + Math.PI/4) * (radius * 0.8),
                            Math.sin(angle + Math.PI/2) * (radius * 0.6),
                            Math.sin(angle + Math.PI*3/4) * (radius * 0.8),
                            Math.sin(angle + Math.PI) * radius
                          ],
                          opacity: [0, 1, 1, 1, 0],
                          scale: [0, 1.2, 1, 1.2, 0],
                          rotate: [0, 180, 360, 540, 720]
                        }}
                        transition={{
                          duration: tech.duration,
                          delay: tech.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, 0.2, 0.5, 0.8, 1]
                        }}
                        whileHover={{
                          scale: 1.5,
                          zIndex: 10,
                          filter: "drop-shadow(0 0 10px var(--icon-color))"
                        }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <div className="propos-text">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="propos-description">
                  {currentLanguage === 'fr' ? (
                    <>
                      Je m'appelle <motion.strong
                        initial={{ color: "#ffffff" }}
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        Mohammed Hajjaj
                      </motion.strong>, développeur web passionné par le numérique et la création de solutions modernes.
                    </>
                  ) : (
                    <>
                      I'm <motion.strong
                        initial={{ color: "#ffffff" }}
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        Mohammed Hajjaj
                      </motion.strong>, a web developer passionate about digital technology and creating modern solutions.
                    </>
                  )}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="propos-description">
                  {currentLanguage === 'fr' ? (
                    <>
                      Je maîtrise des technologies telles que <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        Java
                      </motion.strong>, <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        Spring Boot
                      </motion.strong>, <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        React.js
                      </motion.strong>, <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        HTML/CSS
                      </motion.strong>, <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        JavaScript
                      </motion.strong> et <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        MySQL
                      </motion.strong>, que j'utilise pour concevoir des applications web performantes et intuitives.
                    </>
                  ) : (
                    <>
                      I master technologies such as <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        Java
                      </motion.strong>, <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        Spring Boot
                      </motion.strong>, <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        React.js
                      </motion.strong>, <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        HTML/CSS
                      </motion.strong>, <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        JavaScript
                      </motion.strong> and <motion.strong
                        whileHover={{ color: "#666666" }}
                        transition={{ duration: 0.3 }}
                      >
                        MySQL
                      </motion.strong>, which I use to design high-performance and intuitive web applications.
                    </>
                  )}
                </p>
              </motion.div>

              <motion.div
                className="propos-highlights"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {(currentLanguage === 'fr' ? [
                  { icon: "💻", text: "Développement Web", color: "#28a745" },
                  { icon: "🚀", text: "Solutions Modernes", color: "#007bff" },
                  { icon: "🎯", text: "Performance & Intuitivité", color: "#dc3545" }
                ] : [
                  { icon: "💻", text: "Web Development", color: "#28a745" },
                  { icon: "🚀", text: "Modern Solutions", color: "#007bff" },
                  { icon: "🎯", text: "Performance & Intuitiveness", color: "#dc3545" }
                ]).map((item, index) => (
                  <motion.div
                    key={index}
                    className="highlight-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 8px 25px ${item.color}20`
                    }}
                  >
                    <span className="highlight-icon" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Propos;
