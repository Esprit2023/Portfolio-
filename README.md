# Portfolio · Nack Lange Marvin

Mon site de présentation : HTML, CSS, JavaScript.

## Structure du dossier

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── cv/
│   └── CV-Nack-Lange-Marvin.pdf      ← ton CV en PDF (à ajouter)
└── images/
    ├── photo.jpg                     ← ta photo (à ajouter)
    ├── design1.jpg, design2.jpg ...  ← tes créations Canva (à ajouter)
```

---

## 1. Ouvrir dans Visual Studio Code

1. J'ai crée un dossier `portfolio` sur mon ordinateur et j'y ai mis 3 fichiers (`index.html`, `style.css`, `script.js`).
2. J'ai crée sous-dossier `images`.
3. Exporte ton CV en **PDF** depuis Canva, nomme-le `CV-Nack-Lange-Marvin.pdf`, mets-le dans `cv/`.
4. Mets ta photo dans `images/photo.jpg` et tes designs dans `images/` (design1.jpg, etc.).
5. Dans VS Code : **Fichier → Ouvrir le dossier** → choisis `portfolio`.
6. Installe l'extension **Live Server** (Ritwick Dey), puis clic droit sur `index.html` → **Open with Live Server**. Le site se met à jour à chaque sauvegarde.

## 2. Personnaliser

- Cherche `TON-PSEUDO` dans `index.html` (Ctrl+Maj+F) et remplace par ton nom d'utilisateur GitHub.
- Pour ajouter un design : copie un bloc `<figure class="g-item">...</figure>` dans la section Designs.
- Pour ajouter un projet : copie un bloc `<article class="project-card">...</article>` dans la section Projets.
- Les barres de niveau se règlent avec `style="width:60%"`. Sois honnête sur tes niveaux.

## 3. Mettre sur GitHub

### a) Préparer
1. Installe **Git** : https://git-scm.com
2. Crée un compte sur https://github.com (choisis un pseudo professionnel, par exemple `marvin-nack`).
3. Dans le terminal de VS Code (Ctrl+`), configure ton identité une seule fois :
```bash
git config --global user.name "Nack Lange Marvin"
git config --global user.email "Nackmarvin001@gmail.com"
```

### b) Envoyer le projet
1. Sur GitHub : **New repository**, nom `portfolio`, **Public**, sans README (tu en as déjà un).
2. Dans le terminal de VS Code, dans le dossier du projet :
```bash
git init
git add .
git commit -m "Premier commit : portfolio"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/portfolio.git
git push -u origin main
```

### c) Mettre le site en ligne (gratuit)
1. Sur GitHub : **Settings → Pages**.
2. **Source** : Deploy from a branch → branche `main` → dossier `/ (root)` → **Save**.
3. Après 1 à 2 minutes, ton site est sur : `https://TON-PSEUDO.github.io/portfolio/`
4. Mets ce lien sur ton CV, ton WhatsApp, LinkedIn.

### d) Mettre à jour plus tard
```bash
git add .
git commit -m "Ajout d'un nouveau design"
git push
```

### e) Astuce : profil GitHub
Crée un dépôt public nommé exactement comme ton pseudo (ex. `marvin-nack`) avec un `README.md` : il s'affiche en haut de ton profil. Présente-toi en 5 lignes et mets le lien de ton portfolio.

---

## 4. Idées de projets avec ce que tu sais (HTML, CSS, C, algorithmique, Merise)

Un projet = un dépôt GitHub avec un **README** (description, captures d'écran, comment lancer) et des **commits réguliers**. Les recruteurs regardent la régularité autant que le résultat.

### HTML / CSS
| Projet | Ce que tu montres |
|---|---|
| Landing page d'un restaurant ou d'une boutique | Mise en page, responsive, flexbox |
| Page de menu d'un point de service numérique (Orange Money, Wave, crédit...) | Lien avec ton expérience réelle |
| Formulaire d'inscription stylé | Balises de formulaire, mise en forme |
| Clone d'une page connue (Netflix, Spotify) | Précision, grilles CSS |
| Ta carte de visite numérique | Design + responsive |
| Page d'un événement (concert, tournoi) | Combine tes talents de graphiste et de codeur |

### Langage C (en console)
| Projet | Notions travaillées |
|---|---|
| **Calculatrice** avec menu | Fonctions, switch, boucles |
| **Jeu du plus ou moins** (nombre aléatoire) | rand(), conditions, boucles |
| **Jeu du pendu** | Tableaux, chaînes de caractères |
| **Gestion de contacts** (ajouter, chercher, supprimer) | Structures, tableaux, fichiers |
| **Gestion de caisse** (entrées, sorties, solde, historique) | Structures, fichiers, ton expérience de gérant |
| **Gestion de stock** (produits, quantités, alertes) | Structures, fichiers, lien avec ton poste chez ACS Congo |
| **Suivi des créances** (client, montant, date, reste à payer) | Lien direct avec ton poste d'agent de recouvrement |
| **Gestion des notes d'élèves** (moyenne, classement) | Tableaux, tri, fonctions |
| **Convertisseur** (FCFA ↔ euro ↔ dollar, °C ↔ °F) | Fonctions, saisie sécurisée |

### Algorithmique
Un dépôt `algorithmes-en-c` avec un dossier par algorithme, expliqué en commentaires et en pseudo-code :
- Tri à bulles, tri par sélection, tri par insertion
- Recherche séquentielle et dichotomique
- Nombres premiers (crible d'Ératosthène)
- Suite de Fibonacci, factorielle (itératif et récursif)
- PGCD, palindromes, conversion binaire/décimal

### Merise
Un dépôt par étude de cas, avec : **dictionnaire de données, MCD, MLD, MPD**, exportés en image ou PDF, et un script SQL si possible.
- Gestion de stock d'un magasin
- Gestion d'une bibliothèque (livres, adhérents, emprunts)
- Gestion d'un point de service numérique (clients, transactions, caisse)
- Gestion de recouvrement (clients, factures, paiements, relances)
- Gestion scolaire (élèves, classes, notes)

### Projets « vitrine » qui impressionnent
1. **Portfolio** (celui-ci) en ligne sur GitHub Pages.
2. **Gestion de caisse ou de créances en C**, basée sur ton vrai vécu professionnel. C'est ton meilleur argument : tu connais le métier et tu codes la solution.
3. **Étude Merise complète** avec MCD/MLD propres et script SQL.
4. **Un dépôt de designs** (affiches, logos) avec les fichiers sources et un aperçu.

### Quand tu auras vu plus de choses en L2
- JavaScript : to-do list, calculatrice web, quiz, convertisseur de devises, météo avec une API
- SQL / MySQL : implémenter tes études Merise
- Python ou Java : petits outils de gestion

## 5. Conseils pour les recruteurs
- **Un projet fini et bien présenté vaut mieux que cinq projets vides.**
- Chaque dépôt : README clair, captures d'écran, instructions, licence.
- Commits fréquents, messages clairs (« Ajout de la recherche de contact »).
- Épingle (pin) tes 4 à 6 meilleurs dépôts sur ton profil GitHub.
- Mets le lien du portfolio et de GitHub sur ton CV, WhatsApp et LinkedIn.
- Écris le code toi-même : tu dois pouvoir expliquer chaque ligne en entretien.