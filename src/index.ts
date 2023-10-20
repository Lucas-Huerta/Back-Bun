import { Elysia, t } from 'elysia';
import getWifiName from 'bun-wifi-name'
import '@/database/db.setup';
import { pokemonRoutes } from '@/routes/pokemon.routes';
import { userRoutes } from './routes/user.routes'; 
import { authRoutes } from './routes/auth.routes'; 
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { html } from '@elysiajs/html';

const PORT = process.env.PORT || 3000;
export const app = new Elysia();

app
  .use(html())
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
  .get('/', () => 
  `
    <html lang='en'>
        <head>
            <title>My bun App</title>
        </head>
        <body>
            <h1>Hello World</h1>
            <p>My bun app is running</p>
            <p>🤖 You just connected to : ${getWifiName()}</p>
            <p>✅ Swagger docs available at: ${app.server?.hostname}:${PORT}/v1/swagger</p>
        </body>
    </html>
  `
  )
  .group('', (app: Elysia) =>
    app
      .use(cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      }))
      .use(userRoutes)
      .use(pokemonRoutes)
      .use(authRoutes)
  )
  .listen(PORT, () => {
    console.log("🤖 You just connected to :", getWifiName());
    console.log(`✅ Swagger docs available at: ${app.server?.hostname}:${PORT}/v1/swagger`);
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });