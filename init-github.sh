#!/bin/bash

# Script d'initialisation pour GitHub Pages
echo "🚀 Initialisation du portfolio pour GitHub Pages..."

# Initialiser le repository git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Portfolio website ready for GitHub Pages"

echo "✅ Repository Git initialisé !"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Créez un repository sur GitHub (nommez-le 'votre-nom.github.io')"
echo "2. Ajoutez le remote: git remote add origin https://github.com/votre-nom/votre-nom.github.io.git"
echo "3. Poussez les fichiers: git push -u origin main"
echo "4. Activez GitHub Pages dans les settings du repository"
echo ""
echo "🌐 Votre site sera disponible à: https://votre-nom.github.io"
echo ""
echo "💡 N'oubliez pas de :"
echo "- Ajouter vos images dans le dossier 'images/'"
echo "- Ajouter votre CV en PDF dans le dossier 'documents/'"
echo "- Personnaliser le contenu dans index.html"
echo "- Modifier les informations de contact"
