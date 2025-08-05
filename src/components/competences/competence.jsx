import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase, 
  FaGitAlt, FaCode, FaLaptop, FaUsers, FaLightbulb, FaClock,
  FaBrain, FaRocket, FaTools, FaServer, FaMobile, FaCloud,
  FaArrowRight, FaArrowLeft
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostman, SiIntellijidea, SiPhp, SiLaravel, SiPython } from 'react-icons/si';
import { useTranslation } from '../../translations/translations';
import './competence.css';

const Competence = ({ currentLanguage = 'fr' }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Obtenir les traductions pour la langue actuelle
  const t = useTranslation(currentLanguage);

  // Compétences techniques
  const technicalSkills = [
    { name: "Java", icon: FaJava, color: "#ED8B00", level: 90 },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 85 },
    { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26", level: 90 },
    { name: "PHP", icon: SiPhp, color: "#777BB4", level: 80 },
    { name: "Python", icon: SiPython, color: "#3776AB", level: 75 },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: 85 },
    { name: "React.js", icon: FaReact, color: "#61DAFB", level: 80 },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20", level: 75 },
    { name: "Git", icon: FaGitAlt, color: "#F05032", level: 85 },
    { name: "VS Code", icon: FaCode, color: "#007ACC", level: 90 },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 80 },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 85 }
  ];

  // Compétences professionnelles
  const softSkills = [
    {
      name: currentLanguage === 'fr' ? "Autonomie" : "Autonomy",
      icon: FaRocket,
      description: currentLanguage === 'fr' 
        ? "Capacité à travailler de manière indépendante"
        : "Ability to work independently",
      color: "#28a745"
    },
    {
      name: currentLanguage === 'fr' ? "Esprit d'équipe" : "Teamwork",
      icon: FaUsers,
      description: currentLanguage === 'fr'
        ? "Collaboration efficace et communication positive"
        : "Effective collaboration and positive communication",
      color: "#007bff"
    },
    {
      name: currentLanguage === 'fr' ? "Résolution de problèmes" : "Problem Solving",
      icon: FaBrain,
      description: currentLanguage === 'fr'
        ? "Analyse logique et créativité"
        : "Logical analysis and creativity",
      color: "#dc3545"
    },
    {
      name: currentLanguage === 'fr' ? "Gestion du temps" : "Time Management",
      icon: FaClock,
      description: currentLanguage === 'fr'
        ? "Organisation efficace et respect des délais"
        : "Effective organization and meeting deadlines",
      color: "#ffc107"
    },
    {
      name: currentLanguage === 'fr' ? "Curiosité" : "Curiosity",
      icon: FaLightbulb,
      description: currentLanguage === 'fr'
        ? "Envie d'apprendre de nouvelles technologies"
        : "Desire to learn new technologies",
      color: "#17a2b8"
    },
    {
      name: currentLanguage === 'fr' ? "Adaptabilité" : "Adaptability",
      icon: FaCloud,
      description: currentLanguage === 'fr'
        ? "Flexibilité face aux changements"
        : "Flexibility in the face of changes",
      color: "#6f42c1"
    }
  ];

  const handleSkillHover = (skill, index, type) => {
    setHoveredSkill({ skill, index, type });
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="competences" className="competence-section">
      <div className="container">
        <motion.div
          className="competence-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="competence-header">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.skills.title}
            </motion.h2>
            <motion.div
              className="competence-underline"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Layout compact */}
          <div className="competence-layout-compact">
            {/* Compétences techniques */}
            <motion.div
              className="skills-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>{currentLanguage === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}</h3>
              <div className="skills-grid">
                {technicalSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      className="skill-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        boxShadow: `0 10px 25px ${skill.color}30`
                      }}
                      onHoverStart={() => handleSkillHover(skill, index, 'technical')}
                      onHoverEnd={handleSkillLeave}
                    >
                      {/* Missile volant autour de la carte */}
                      {hoveredSkill && hoveredSkill.index === index && hoveredSkill.type === 'technical' && (
                        <motion.div
                          className="orbital-missile"
                          initial={{ 
                            x: "100%", 
                            y: "100%", 
                            scale: 0,
                            rotate: 0
                          }}
                          animate={{ 
                            x: ["100%", "-20%", "120%", "100%"],
                            y: ["100%", "-20%", "-20%", "100%"],
                            scale: [0, 1, 1, 0],
                            rotate: [0, 45, 90, 180, 270, 360]
                          }}
                          transition={{ 
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.25, 0.5, 0.75, 1]
                          }}
                          style={{
                            color: skill.color
                          }}
                        >
                          <div className="missile-container">
                            <div className="missile-body">
                              <div className="missile-tip" />
                              <div className="missile-body-main" />
                              <div className="missile-tail" />
                            </div>
                            <div className="missile-trail" />
                          </div>
                        </motion.div>
                      )}

                      <div className="skill-icon" style={{ color: skill.color }}>
                        <IconComponent size={28} />
                      </div>
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                        <div className="skill-level">
                          <div 
                            className="skill-progress" 
                            style={{ 
                              width: `${skill.level}%`,
                              backgroundColor: skill.color
                            }}
                          />
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Compétences professionnelles */}
            <motion.div
              className="skills-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>{currentLanguage === 'fr' ? 'Compétences Professionnelles' : 'Professional Skills'}</h3>
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      className="soft-skill-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        boxShadow: `0 10px 25px ${skill.color}30`
                      }}
                      onHoverStart={() => handleSkillHover(skill, index, 'soft')}
                      onHoverEnd={handleSkillLeave}
                    >
                      {/* Missile volant autour de la carte */}
                      {hoveredSkill && hoveredSkill.index === index && hoveredSkill.type === 'soft' && (
                        <motion.div
                          className="orbital-missile"
                          initial={{ 
                            x: "100%", 
                            y: "100%", 
                            scale: 0,
                            rotate: 0
                          }}
                          animate={{ 
                            x: ["100%", "-20%", "120%", "100%"],
                            y: ["100%", "-20%", "-20%", "100%"],
                            scale: [0, 1, 1, 0],
                            rotate: [0, 45, 90, 180, 270, 360]
                          }}
                          transition={{ 
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.25, 0.5, 0.75, 1]
                          }}
                          style={{
                            color: skill.color
                          }}
                        >
                          <div className="missile-container">
                            <div className="missile-body">
                              <div className="missile-tip" />
                              <div className="missile-body-main" />
                              <div className="missile-tail" />
                            </div>
                            <div className="missile-trail" />
                          </div>
                        </motion.div>
                      )}

                      <div className="soft-skill-icon" style={{ color: skill.color }}>
                        <IconComponent size={32} />
                      </div>
                      <div className="soft-skill-content">
                        <h4 className="soft-skill-name">{skill.name}</h4>
                        <p className="soft-skill-description">{skill.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competence;
