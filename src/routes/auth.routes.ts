import { Elysia } from 'elysia';
import { login, register } from '@/controllers/auth.controller';
import cookie from '@elysiajs/cookie';

export const authRoutes = (app: Elysia) =>
  app.group('auth', (app: Elysia) =>
  app.use(cookie())
    .post('/register', async (handler: Elysia.Handler) => {
        await register(handler, handler.setCookie).then((res) => {
            handler.set.status = res.status;
            handler.set.body = res.message;
        });
        return handler.set.body;
    })
    .post('/login', async (handler: Elysia.Handler) => {
        await login(handler, handler.setCookie).then((res) => {
            handler.set.status = res.status;
            handler.set.body = res.message;
        });
        return handler.set.body;
    })
);