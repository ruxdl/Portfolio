# 🚀 Guide de Démarrage Rapide

## Étape 1 : Personnalisation du contenu

### Informations personnelles
1. Ouvrez `index.html`
2. Remplacez "Ruben Riedel" par votre nom
3. Modifiez votre email : `ruben.riedel@email.com`
4. Modifiez votre téléphone : `+33 6 12 34 56 78`
5. Mettez à jour vos liens LinkedIn et GitHub

### Votre présentation
1. Section Hero : Modifiez le titre et la description
2. Section Présentation : Écrivez votre histoire personnelle
3. Section CV : Ajoutez votre formation et expérience

## Étape 2 : Ajout des images

Ajoutez ces images dans le dossier `images/` :
- `profile.jpg` : Votre photo (300x300px)
- `interests.jpg` : Image pour vos centres d'intérêts
- `sports.jpg` : Image pour vos sports
- `studies.jpg` : Image pour vos études
- `projects.jpg` : Image pour vos projets
- `presentation.jpg` : Image pour la présentation

## Étape 3 : Documents

Ajoutez votre CV au format PDF dans `documents/cv.pdf`

## Étape 4 : Hébergement sur GitHub

### Création du repository
1. Allez sur [GitHub](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le : `votre-nom-github.github.io` (remplacez par votre nom d'utilisateur)
4. Repository public ✅
5. Cliquez "Create repository"

### Upload des fichiers
**Option 1 : Interface Web GitHub**
1. Cliquez "uploading an existing file"
2. Glissez-déposez tous vos fichiers
3. Écrivez un message de commit
4. Cliquez "Commit new files"

**Option 2 : Ligne de commande**
```bash
cd /Users/riedelruben/Desktop/Portfolio
./init-github.sh
git remote add origin https://github.com/VOTRE-NOM/VOTRE-NOM.github.io.git
git push -u origin main
```

### Activation de GitHub Pages
1. Allez dans Settings de votre repository
2. Section "Pages" dans le menu de gauche
3. Source : "Deploy from a branch"
4. Branch : "main"
5. Folder : "/ (root)"
6. Cliquez "Save"

## Étape 5 : Vérification

- Votre site sera disponible en quelques minutes à : `https://votre-nom.github.io`
- Testez tous les liens et fonctionnalités
- Vérifiez l'affichage mobile

## 🎨 Personnalisation avancée

### Couleurs
Modifiez les couleurs dans `styles.css` (lignes 8-16) :
```css
:root {
    --primary-color: #2563eb;    /* Bleu principal */
    --accent-color: #f59e0b;     /* Orange accent */
    /* Changez ces valeurs */
}
```

### Contenu des modals
Modifiez `script.js` ligne 40+ pour personnaliser le contenu détaillé de chaque section.

## ✅ Checklist finale

- [ ] Nom personnalisé partout
- [ ] Email et téléphone à jour
- [ ] Liens sociaux corrects
- [ ] Images ajoutées (6 images)
- [ ] CV PDF ajouté
- [ ] Repository GitHub créé
- [ ] GitHub Pages activé
- [ ] Site testé et fonctionnel

## 🆘 Besoin d'aide ?

- Documentation GitHub Pages : [pages.github.com](https://pages.github.com/)
- Tutoriel Git : [git-scm.com/docs](https://git-scm.com/docs)
- Images gratuites : [unsplash.com](https://unsplash.com)

---

**Votre portfolio est prêt ! 🎉**
