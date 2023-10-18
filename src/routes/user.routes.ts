import { Elysia, t } from 'elysia';
import { createUser, getByIdUser, getUser, deleteByIdUser } from '@/controllers/user.controller';
import cookie from '@elysiajs/cookie';
import { checkAuthorization } from '@/middlewares/authorization';

export const userRoutes = (app: Elysia) =>
  app.group("users", (app: Elysia) =>
  app.use(cookie())
    .post('/post', async (handler: Elysia.Handler) => {
        await createUser(handler).then((res) => {
            handler.set.status = res.status;
            handler.set.body = res.message;
        });
        return handler.set.body;
    }, { beforeHandle: [checkAuthorization]})

    .get('/all', async ({ set }: Elysia.Set) => {
        let user = null
        await getUser({ set })
        .then((res) => {
          user =  res;
        });
        return user;
    }, { beforeHandle: [checkAuthorization]})

      .get('/:id', async (handler: Elysia.Handler) => {
        let user = null
        await getByIdUser({ set: handler.set }, handler)
        .then((res) => {
          user = res;
        });
        return user;
    }, { beforeHandle: [checkAuthorization]})

      .delete('/delete/:id', async (handler: Elysia.Handler) => {
        await deleteByIdUser(handler).then((res) => {
            handler.set.status = res.status;
            handler.set.body = res.message;
          });
          return handler.set.body;
    }, { beforeHandle: [checkAuthorization]})
);