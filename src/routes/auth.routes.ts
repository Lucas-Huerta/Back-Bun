import { Elysia } from 'elysia';
import { login, register } from '@/controllers/auth.controller';

export const authRoutes = (app: Elysia) =>
  app.group('auth', (app: Elysia) =>
    app.post('/register', async (handler: Elysia.Handler) => {
        await register(handler).then((res) => {
            handler.set.status = res.status;
            handler.set.body = res.message;
        });
        return handler.set.body;
    })
    .post('/login', async (handler: Elysia.Handler) => {
        await login(handler).then((res) => {
            handler.set.status = res.status;
            handler.set.body = res.message;
        });
        return handler.set.body;
    })
);