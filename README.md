# Little back-end with Bun 🍡 & Elysia 🐺

Un projet back-end créé avec [Bun](https://bun.sh/) et [Elysia](https://elysiajs.com/) dans le cadre du cours d'Architecture back-end.

## Aperçu 🕶️

Ce projet est un petit back-end qui permet d'avoir une petite API en utilisant [Bun](https://bun.sh/), une technologie permettant de réaliser des API simples et, couplée à [Elysia](https://elysiajs.com/), qu'elles soient plus rapide qu'une API [NodeJS](https://nodejs.org/fr) [Express](https://expressjs.com/fr/).  
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

-   [CORS](https://github.com/elysiajs/elysia-cors) : Autorise et prend en charge les requêtes depuis les multi-origines sécurisées
-   [HTML](https://github.com/elysiajs/elysia-html) : Permet d'injecter du code HTML
-   [Cookies](https://github.com/elysiajs/elysia-cookie) : Permet d'ajouter des cookies et qu'ils soient accessibles dans toute l'application
-   [Elysia Jwt](https://github.com/elysiajs/elysia-jwt) : Permet la génération et la vérification d'un token
-   [Mongoose](https://bun.sh/guides/ecosystem/mongoose) : Permet la connexion à la base de donnée Mongo Db et la génération des schémas de données

En + 🐣 :

-   [Bun Wifi Name](https://github.com/wobsoriano/bun-wifi-name) : Récupère et permet d'afficher le nom de la wifi sur laquelle le serveur tourne

## Justification des plugins ⌨️

Chaque plugin ajouté à été **pensé** pour l'utilité de l'application.  
Les plugins [Cookies](https://github.com/elysiajs/elysia-cookie) et [Elysia Jwt](https://github.com/elysiajs/elysia-jwt) ont été ajoutés pour la sécurité de l'application, pour faire en sorte qu'un utilisateur doit se connecter avant de pouvoir faire des requêtes modifiant la base de données.  
Les [CORS](https://github.com/elysiajs/elysia-cors) permettent d'autoriser et de prendre en charge les requêtes provenant de divers origines et donc permet dans le futur de pouvoir moduler les points d'entrés sécurisés du serveur.  
Un [Swagger](https://github.com/elysiajs/elysia-swagger) qui permet de réunir tous les points d'entrés de l'api sur une page en indiquant l'url, les paramètres à prendre en charge et même de tester le point. Ceci permet de faciliter la compréhension et l'usage des différents points d'entrés disponibles.  
Ensuite, [HTML](https://github.com/elysiajs/elysia-html) permet d'injecter du code HTML sur un point d'entrée défini pour pouvoir mettre des données sur une page HTML afin faciliter l'accessiblité si des utilisteurs souhaitent voir des données ou autre.  
Aussi, [Mongoose](https://bun.sh/guides/ecosystem/mongoose), un plugin nécéssaire, permettant de connecter le boilerplate avec une base de donnée Mongo DB. La connexion se fait via les variables du .env, un .env-example est mit à disposition afin d'avoir la même configuration.  
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
