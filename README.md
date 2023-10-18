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
|__ 📁 middlewares
|   |__ 📄 authorization.ts
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

-   [Bun](https://bun.sh/) 🍡

Et il inclut aussi les plugins suivants 🪛 :

-   [Swagger](https://github.com/elysiajs/elysia-swagger) : Génère un Swagger de toute l'application à l'adresse

```bash
 /v1/swagger
```

-   [CORS](https://github.com/elysiajs/elysia-cors) : Autorise les requêtes vers les origines définies
-   [HTML](https://github.com/elysiajs/elysia-html) : Permet d'injecter du code HTML
-   [Cookies](https://github.com/elysiajs/elysia-cookie) : Permet d'ajouter des cookies et de les avoir dans toute l'application
-   [Elysia Jwt](https://github.com/elysiajs/elysia-jwt) : Gère la génération et la vérification d'un token

En + 🐣 :

-   [Bun Wifi Name](https://github.com/wobsoriano/bun-wifi-name) : Récupère le nom de la wifi sur laquelle le serveur tourne

## Justification des plugins ⌨️

Chaque plugin ajouté à été pensé pour l'utilité de l'application.  
Les plugins [Cookies](https://github.com/elysiajs/elysia-cookie) et [Elysia Jwt](https://github.com/elysiajs/elysia-jwt) ont été ajoutés pour la sécurité de l'application, pour faire en sorte qu'un utilisateur doit se connecter avant de pouvoir faire des requêtes modifiant la base de données.  
Les [CORS](https://github.com/elysiajs/elysia-cors) permettent d'autoriser les requêtes vers des origines définie et donc permet dans le futur de pouvoir moduler les points d'entrés du serveur.  
Ensuite, [HTML](https://github.com/elysiajs/elysia-html) permet d'injecter du code HTML sur un point d'entrée défini pour pouvoir mettre des données sur une page HTML afin faciliter l'accessiblité si des utilisteurs souhaitent voir des données ou autre.  
Et pour finir, [Bun Wifi Name](https://github.com/wobsoriano/bun-wifi-name) et un plugin qui est en +, et qui permet de récupérer le nom de la wifi sur laquelle le serveur est connecté afin d'afficher n'importe ou ce nom.

## Commandes disponibles ⌨️

Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :

```bash
bun run start
```

Lance l'application en mode watch mode => recharge la page à chaque sauvegarde.

## Variables d'environnement ⍵

Ce projet utilise des variables d'environnement pour configurer certains aspects de l'application. Vous pouvez créer un fichier .env à la racine du projet pour définir ces variables.  
Un fichier d'exemple est fourni dans env-example.
