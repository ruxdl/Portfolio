# Portfolio Personnel - Ruben Riedel

Un site portfolio moderne et responsive construit avec HTML5, CSS3 et JavaScript vanilla.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - Fonctionne parfaitement sur tous les appareils
- **Navigation fluide** - Menu de navigation avec scroll smooth et liens d'ancrage
- **Sections interactives** - Cards avec modals pour plus d'informations
- **Animations CSS** - Animations au scroll et effets de hover élégants
- **Formulaire de contact** - Interface de contact avec validation
- **Optimisé pour GitHub Pages** - Prêt pour l'hébergement gratuit

## 📁 Structure du projet

```
Portfolio/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript
├── images/            # Dossier pour les images
│   ├── profile.jpg    # Photo de profil
│   ├── interests.jpg  # Image centres d'intérêts
│   ├── sports.jpg     # Image sports
│   ├── studies.jpg    # Image études
│   ├── projects.jpg   # Image projets
│   └── presentation.jpg # Image présentation
├── documents/         # Dossier pour les documents
│   └── cv.pdf        # CV en PDF
└── README.md         # Ce fichier
```

## 🎨 Personnalisation

### 1. Informations personnelles
Modifiez dans `index.html` :
- Votre nom dans le titre et les balises `<h1>`
- Vos informations de contact (email, téléphone, LinkedIn, GitHub)
- Votre description dans la section hero

### 2. Contenu des sections
Modifiez le contenu des cards dans `index.html` :
- Description de vos centres d'intérêts
- Vos sports et activités
- Votre parcours d'études
- Vos projets

### 3. Contenu des modals
Modifiez dans `script.js` l'objet `modalContent` pour personnaliser le contenu détaillé de chaque section.

### 4. CV et formation
Modifiez dans `index.html` la section CV :
- Votre formation
- Votre expérience
- Vos compétences

### 5. Images
Ajoutez vos images dans le dossier `images/` :
- `profile.jpg` : Votre photo de profil (300x300px recommandé)
- `interests.jpg` : Image pour vos centres d'intérêts
- `sports.jpg` : Image pour vos sports
- `studies.jpg` : Image pour vos études
- `projects.jpg` : Image pour vos projets
- `presentation.jpg` : Image pour la section présentation

### 6. Documents
Ajoutez votre CV en PDF dans le dossier `documents/cv.pdf`

### 7. Couleurs et design
Modifiez les variables CSS dans `styles.css` :
```css
:root {
    --primary-color: #2563eb;    /* Couleur principale */
    --secondary-color: #1e40af;   /* Couleur secondaire */
    --accent-color: #f59e0b;      /* Couleur d'accent */
    /* ... autres variables */
}
```

## 🌐 Hébergement sur GitHub Pages

### 1. Créer un repository GitHub
1. Allez sur [GitHub](https://github.com)
2. Créez un nouveau repository public
3. Nommez-le `votre-nom.github.io` (remplacez par votre nom d'utilisateur GitHub)

### 2. Upload des fichiers
1. Uploadez tous les fichiers de votre portfolio dans le repository
2. Assurez-vous que `index.html` est à la racine

### 3. Activer GitHub Pages
1. Allez dans les Settings de votre repository
2. Scrollez jusqu'à la section "Pages"
3. Source : "Deploy from a branch"
4. Branch : "main" ou "master"
5. Folder : "/ (root)"
6. Cliquez sur "Save"

### 4. Accéder à votre site
Votre site sera disponible à l'adresse : `https://votre-nom.github.io`

## 🛠 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec Flexbox et Grid
- **JavaScript Vanilla** - Interactions et animations
- **Font Awesome** - Icônes
- **Google Fonts** - Police Inter

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à tous les écrans :
- **Desktop** : Layout en grille avec navigation horizontale
- **Tablet** : Adaptation des colonnes et espacements
- **Mobile** : Menu hamburger et layout single-column

## ✨ Fonctionnalités avancées

- **Smooth scrolling** - Navigation fluide entre sections
- **Intersection Observer** - Animations au scroll
- **Modals dynamiques** - Contenu détaillé pour chaque section
- **Formulaire interactif** - Feedback visuel lors de la soumission
- **Navigation active** - Mise en surbrillance de la section actuelle

## 🎯 Conseils pour l'optimisation

1. **Images** : Optimisez vos images (format WebP, compression)
2. **SEO** : Ajoutez des meta descriptions et keywords
3. **Performance** : Minifiez CSS/JS pour la production
4. **Accessibilité** : Ajoutez des attributs `alt` aux images

## 📞 Support

Pour toute question concernant la personnalisation ou l'hébergement de votre portfolio, n'hésitez pas à consulter la documentation GitHub Pages ou à rechercher des tutoriels en ligne.

---

**Bonne chance avec votre nouveau portfolio ! 🚀**
