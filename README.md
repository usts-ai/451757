# ChronoTrack - Application de Badgeuse Horaire

Une application moderne de gestion des temps de travail développée avec React et TypeScript.

## Fonctionnalités

- Badgeuse horaire avec interface intuitive
- Scan de code QR pour un badgeage rapide
- Tableau de bord avec statistiques détaillées
- Gestion des utilisateurs et des départements
- Interface responsive compatible mobile, tablette et desktop

## Technologies utilisées

- React 19 avec TypeScript
- Tailwind CSS (via CDN)
- React Router pour la navigation
- Framer Motion pour les animations

## Installation et démarrage

### Développement local

1. Cloner le dépôt
   ```
   git clone <url-du-depot>
   cd chronotrack
   ```

2. Installer les dépendances
   ```
   npm install
   ```

3. Lancer l'application en mode développement
   ```
   npm start
   ```
   L'application sera disponible à l'adresse [http://localhost:3000](http://localhost:3000)

## Déploiement avec Docker

### Prérequis

- Docker et Docker Compose installés sur votre machine ou serveur

### Déploiement en production

1. Construire et démarrer les conteneurs
   ```
   docker-compose up -d
   ```
   L'application sera disponible à l'adresse [http://localhost](http://localhost)

2. Arrêter les conteneurs
   ```
   docker-compose down
   ```

### Développement avec Docker

Pour développer avec Docker, vous pouvez décommenter les lignes correspondantes dans le fichier `docker-compose.yml` et exécuter :

```
docker-compose -f docker-compose.yml up chronotrack-dev
```

### Personnalisation

- Modifier le fichier `nginx.conf` pour personnaliser la configuration du serveur web
- Ajuster les ports dans `docker-compose.yml` si nécessaire

## Structure du projet

```
chronotrack/
├── public/                 # Fichiers statiques
├── src/                    # Code source
│   ├── components/         # Composants réutilisables
│   ├── pages/              # Pages de l'application
│   ├── data/               # Données mockées
│   ├── types.ts            # Types TypeScript
│   └── ...
├── Dockerfile              # Configuration Docker
├── docker-compose.yml      # Configuration Docker Compose
├── nginx.conf              # Configuration Nginx
└── ...
```

## Captures d'écran

L'application comprend trois pages principales :
- Page d'accueil avec présentation des fonctionnalités
- Page de badgeuse pour l'enregistrement des temps de travail
- Tableau de bord pour visualiser les statistiques

## Licence

Ce projet est sous licence MIT.
