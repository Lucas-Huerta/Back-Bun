import { Elysia, t } from 'elysia';
import './database/db.setup';
import { usersController } from './controllers/user.controller';
import { logger } from '@grotto/logysia';

const PORT = process.env.PORT || 3000;
export const app = new Elysia();

app
  .use(logger())
  .get('/', () => 'Hello Bun.js!')
  .group('', (app: Elysia) =>
    app
      .use(usersController)
  )
  .listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });