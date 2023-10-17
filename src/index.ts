import { Elysia, t } from 'elysia';
import getWifiName from 'bun-wifi-name'
import './database/db.setup';
import { usersController } from './controllers/user.controller';
import { pokemonController } from './controllers/pokemon.controller';
import { authController } from './controllers/auth.controller';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';

const PORT = process.env.PORT || 3000;
export const app = new Elysia();

app
  .use(
      swagger({
        path: '/v1/swagger',
        documentation: {
          info: {
            title: 'Bun.js CRUD app with Elysia.js',
            version: '1.0.0',
          },
        },
      })
  )
  .get('/', () => 'Hello Bun.js!')
  .group('', (app: Elysia) =>
    app
      .use(cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      }))
      .use(usersController)
      .use(pokemonController)
      .use(authController)
  )
  .listen(PORT, () => {
    console.log("🤖 You just connected to :", getWifiName())
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });