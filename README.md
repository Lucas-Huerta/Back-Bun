# Little back-end with Bun 🍡 & Elysia 🐺

Un projet back-end créé avec [Bun](https://bun.sh/) et [Elysia](https://elysiajs.com/) dans le cadre du cours d'Architecture back-end.

## Aperçu 🕶️

Ce projet est un petit back-end qui permet d'avoir une petite API en utilisant [Bun](https://bun.sh/), une technologie permettant de réaliser des API simples et plus rapide que NodeJS.  
Ce projet implémente aussi [Elysia](https://elysiajs.com/) qui est un framework TypeScript et optimisé par [Bun](https://bun.sh/) avec une sécurité de type de bout en bout.

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
|__ 📁 routes
|   ├── 📄 auth.routes.ts
|   ├── 📄 user.routes.ts
|   ├── 📄 pokemon.routes.ts
|__ 📁 types
|   ├── 📄 Pokemon.ts
|   ├── 📄 User.ts
📄 index.ts
.env
.env-example
package.json
tsconfig.json
```

## Technologies / Plugins inclus ⚙️

Ce modèle de démarrage inclut la technologie suivante 🧰 :

- [Bun](https://bun.sh/) 🍡

Et il inclut aussi les plugins suivants 🪛 :

- [Swagger](https://github.com/elysiajs/elysia-swagger) : Génère un Swagger de toute l'application à l'adresse

```bash
 /v1/swagger
```

- [CORS](https://github.com/elysiajs/elysia-cors) : Autorise les requêtes vers les origines définies
- [HTML](https://github.com/elysiajs/elysia-html) : Permet d'injecter du code HTML

En + 🐣 :

- [Bun Wifi Name](https://github.com/wobsoriano/bun-wifi-name) : Récupère le nom de la wifi sur laquelle le serveur tourne

## Commandes disponibles ⌨️

Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :

```bash
bun run start
```

Lance l'application en mode watch mode => recharge la page à chaque sauvegarde.

## Variables d'environnement ⍵

Ce projet utilise des variables d'environnement pour configurer certains aspects de l'application. Vous pouvez créer un fichier .env à la racine du projet pour définir ces variables.  
Un fichier d'exemple est fourni dans env-example.
