# Portfolio avec Navbar Moderne

Ce projet contient un composant Navbar moderne et responsive pour votre portfolio personnel.

## 🚀 Fonctionnalités du Navbar

### ✅ Fonctionnalités implémentées

1. **Logo/Nom** - En haut à gauche
   - Affiche votre nom "Mohammed Hajjaj" avec un dégradé de couleur
   - Cliquable pour revenir à la page d'accueil
   - Animation au survol avec Framer Motion

2. **Liens de navigation** - Navigation principale
   - Accueil
   - À propos
   - Compétences  
   - Projets
   - Expérience
   - Contact
   - Animations fluides au survol avec effet de soulignement

3. **Menu burger** - Pour mobile
   - Apparaît automatiquement sur les écrans < 768px
   - Animation d'ouverture/fermeture avec rotation des icônes
   - Navigation tactile optimisée

4. **Bouton spécial** - Télécharger CV
   - Bouton "Télécharger CV" visible sur desktop
   - Intégré dans le menu mobile
   - Prêt pour l'intégration de votre CV PDF

### 🎨 Design moderne

- **Responsive** : S'adapte parfaitement à tous les écrans
- **Animations** : Utilise Framer Motion pour des transitions fluides
- **Accessibilité** : Support du clavier et des lecteurs d'écran
- **Mode sombre** : Support automatique du mode sombre
- **Performance** : Optimisé avec des animations CSS et JavaScript

## 📦 Installation et utilisation

### 1. Démarrer le projet

```bash
cd portfolio
npm start
```

Le serveur de développement sera accessible à `http://localhost:3000`

### 2. Utiliser le composant Navbar

Le composant est déjà intégré dans `App.js` :

```jsx
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar name="Mohammed Hajjaj" />
      {/* Votre contenu */}
    </div>
  );
}
```

### 3. Personnaliser le composant

#### Props disponibles

```jsx
const Navbar = ({ 
  name = "Mohammed Hajjaj",  // Votre nom
  logo = null                 // URL de votre logo (optionnel)
}) => {
  // ...
};
```

#### Personnaliser les liens

Modifiez le tableau `navLinks` dans `src/components/navbar/navbar.jsx` :

```jsx
const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'À propos', href: '#a-propos' },
  { name: 'Compétences', href: '#competences' },
  { name: 'Projets', href: '#projets' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
```

#### Personnaliser le bouton CV

Modifiez la fonction `handleDownloadCV` dans `src/components/navbar/navbar.jsx` :

```jsx
const handleDownloadCV = () => {
  // Exemple avec un fichier PDF
  window.open('/path-to-your-cv.pdf', '_blank');
  
  // Ou avec un lien direct
  // window.open('https://example.com/cv.pdf', '_blank');
};
```

## 🎨 Personnalisation des styles

### Couleurs

Modifiez les variables CSS dans `src/components/navbar/navbar.css` :

```css
:root {
  --primary-color: #2563eb;      /* Couleur principale */
  --secondary-color: #1e40af;    /* Couleur secondaire */
  --text-color: #1f2937;         /* Couleur du texte */
  --background-color: rgba(255, 255, 255, 0.95); /* Fond navbar */
}
```

### Animations

Le composant utilise Framer Motion pour les animations. Vous pouvez ajuster :

- **Durée des animations** : Modifiez les valeurs `duration` dans les `transition`
- **Type d'animation** : Changez `ease`, `ease-in`, `ease-out`, etc.
- **Délais** : Ajustez les `delay` pour synchroniser les animations

## 📱 Responsive Design

Le navbar s'adapte automatiquement :

- **Desktop** (> 768px) : Navigation complète avec tous les liens visibles
- **Tablet** (768px) : Menu burger avec navigation mobile
- **Mobile** (< 480px) : Optimisé pour les petits écrans

## 🔧 Technologies utilisées

- **React** : Framework principal
- **JavaScript** : Langage de programmation
- **Framer Motion** : Animations fluides
- **React Icons** : Icônes modernes
- **CSS3** : Styles et animations

## 🚀 Déploiement

### Build pour production

```bash
npm run build
```

### Déploiement sur Netlify/Vercel

1. Connectez votre repository GitHub
2. Configurez la commande de build : `npm run build`
3. Déployez automatiquement

## 📝 Structure des fichiers

```
portfolio/
├── src/
│   ├── components/
│   │   └── navbar/
│   │       ├── navbar.jsx      # Composant principal
│   │       └── navbar.css      # Styles du navbar
│   ├── App.js                  # Application principale
│   ├── App.css                 # Styles globaux
│   └── index.js                # Point d'entrée
├── public/
├── package.json
└── README.md
```

## 🎯 Prochaines étapes

1. **Ajouter votre contenu** : Remplacer les sections par votre contenu
2. **Intégrer votre CV** : Ajouter le lien vers votre CV PDF
3. **Ajouter votre logo** : Remplacer le nom par votre logo
4. **Personnaliser les couleurs** : Adapter à votre charte graphique
5. **Ajouter des sections** : Créer les sections de votre portfolio

## 🤝 Contribution

N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouvelles fonctionnalités

## 📄 Licence

Ce projet est open source et disponible sous licence MIT.
