# Strapi & n8n Docker Project
Ce projet configure et exécute une application Strapi et un serveur n8n à l'aide de Docker et Docker Compose. 
Strapi est utilisé comme CMS et n8n comme outil de workflow d'automatisation.

## Prérequis
- Docker
- Docker Compose
- Git

## Installation

1. Clonez le dépôt : https://github.com/gitreposh/automation.git
2. cd docker-v4
3. Installez les dépendances pour Strapi : cd my-strapi-app puis npm install
4. Installez les dépendances pour n8n : cd ../my-n8n-app puis npm install
5. Revenez au répertoire racine du projet et démarrez les services avec Docker Compose : cd .. puis docker-compose up --build

## Structure du Projet
my-strapi-app/ : Contient l'application Strapi.
my-n8n-app/ : Contient l'application n8n.
docker-compose.yml : Fichier de configuration pour Docker Compose.
.gitignore : Fichier de configuration pour ignorer certains fichiers et dossiers dans Git.

## Accéder aux Applications
Strapi : Accédez à Strapi via http://localhost:1337
n8n : Accédez à n8n via http://localhost:5678
