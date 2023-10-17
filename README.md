# Little back-end with Bun 🍡

Un projet back-end créé avec [Bun](https://bun.sh/) dans le cadre du cours de Architecture back-end.

## Aperçu 🕶️

Ce projet est un petit back-end qui permet d'avoir une petite API en utilisant [Bun](https://bun.sh/), une technologie permettant de réaliser des API rapide.

## Installation 🗂️

1. Clonez ce dépôt vers votre machine locale :

```bash
git clone https://github.com/Lucas-Huerta/Back-Bun.git

cd nom-du-projet

bun install
```

## Strucure du projet 🏛️

```bash
📁 src
|__ 📁 controllers
|   ├── 📄 auth.controller.ts
|   ├── 📄 user.controller.ts
|   ├── 📄 pokemon.controller.ts
|__ 📁 database
|   |__ 📄 db.setup.ts
|__ 📁 types
|   ├── 📄 Pokemon.ts
|   ├── 📄 User.ts
📄 index.ts
.env
.env-example
package.json
```

## Technologies incluses ⚙️

Ce modèle de démarrage inclut la technologie suivante :

- [Bun](https://bun.sh/)

## Commandes disponibles ⌨️

Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :

```bash
bun run start
```

Lance l'application en mode watch mode => recharge la page à chaque sauvergarde.

## Variables d'environnement ⍵

Ce projet utilise des variables d'environnement pour configurer certains aspects de l'application. Vous pouvez créer un fichier .env à la racine du projet pour définir ces variables. Un fichier d'exemple est fourni dans env-example.
