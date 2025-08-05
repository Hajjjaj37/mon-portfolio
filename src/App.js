import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Propos from './components/propos/propos';
import Competence from './components/competences/competence';
import Projet from './components/projets/projet';
import Experience from './components/experiences/experience';
import Contact from './components/contact/contact';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    console.log('Langue changée vers:', newLanguage);
  };

  return (
    <div className="App">
      <Navbar 
        logo="/logoportfolio-removebg-preview.png" 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <main className="main-content">
        <Propos currentLanguage={currentLanguage} />
        <Competence currentLanguage={currentLanguage} />
        <Projet currentLanguage={currentLanguage} />
        <Experience currentLanguage={currentLanguage} />
        <Contact currentLanguage={currentLanguage} />
      </main>
    </div>
  );
}

export default App; 