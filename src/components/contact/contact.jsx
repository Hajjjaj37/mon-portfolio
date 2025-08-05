import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Lottie from 'lottie-react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../../translations/translations';
import './contact.css';

const Contact = ({ currentLanguage = 'fr' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [emailAnimation, setEmailAnimation] = useState(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Obtenir les traductions pour la langue actuelle
  const t = useTranslation(currentLanguage);

  // Charger l'animation Lottie depuis le fichier local
  useEffect(() => {
    // Utiliser le fichier email sent.json local
    fetch(`${process.env.PUBLIC_URL}/email sent.json`)
      .then(response => response.json())
      .then(data => setEmailAnimation(data))
      .catch(error => {
        console.error('Erreur lors du chargement de l\'animation Lottie:', error);
        setEmailAnimation(null);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Configuration EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Hajjaj Mohammed',
        to_email: 'mohammedhajaj460@gmail.com'
      };

      // Envoyer l'email via EmailJS
      const result = await emailjs.send(
        'service_5f821mi', // Service ID EmailJS
        'template_do70lbj', // Template ID EmailJS
        templateParams,
        'RKvxDGv6Onhe2Z5em' // Public Key EmailJS
      );

      if (result.status === 200) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitError(t.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Hajjjaj37', label: t.contact.social.github },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mohammed-hajjaj-23438a291', label: t.contact.social.linkedin },
    { icon: FaInstagram, url: 'https://www.instagram.com/m.hajjaj_?igsh=ZWE3aHZ1cmcwMDNr', label: t.contact.social.instagram },
    { icon: FaEnvelope, url: 'mailto:mohammedhajaj460@gmail.com', label: t.contact.social.email },
    { icon: FaFacebook, url: 'https://www.facebook.com/share/1BUDuoG1Mu/?mibextid=wwXIfr', label: t.contact.social.facebook }
  ];

  return (
    <section className="contact-section" ref={ref}>
      {/* Floating particles background */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left side - 3D illustration */}
          <motion.div 
            className="contact-illustration"
            whileHover={{ 
              rotateY: 5,
              rotateX: -5,
              scale: 1.05
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Lottie animation - Personne qui travaille sur PC */}
            <motion.div 
              className="lottie-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
            >
              {emailAnimation ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Lottie 
                    animationData={emailAnimation}
                    loop={true}
                    style={{ width: 300, height: 300 }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="lottie-placeholder"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="email-icon"
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ✉️
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-header">
              <h2 className="contact-title">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t.contact.title}
                </motion.span>
              </h2>
              <motion.p 
                className="contact-subtitle"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {t.contact.subtitle}
              </motion.p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.contact.form.name}
                  required
                  className="form-input"
                />
                <div className="input-glow"></div>
              </motion.div>

              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.contact.form.email}
                  required
                  className="form-input"
                />
                <div className="input-glow"></div>
              </motion.div>

              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.contact.form.message}
                  required
                  rows="5"
                  className="form-textarea"
                />
                <div className="input-glow"></div>
              </motion.div>

              <motion.button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <span className="btn-text">
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                </span>
                <div className="btn-glow"></div>
              </motion.button>
            </form>

            {/* Success message */}
            {submitSuccess && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <div className="success-icon">✓</div>
                <p>{t.contact.form.success}</p>
              </motion.div>
            )}

            {/* Error message */}
            {submitError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <div className="error-icon">✗</div>
                <p>{submitError}</p>
              </motion.div>
            )}

            {/* Social media links */}
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    boxShadow: "0 5px 15px rgba(99, 102, 241, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 2.0 + index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <social.icon className="social-icon" />
                  <span className="social-label">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
