import { Elysia, t } from 'elysia';
import User, {IUser} from '../types/User'

export const usersController = (app: Elysia) =>
  app.group("", (app: Elysia) =>
    app
    .post('/post', async (handler: Elysia.Handler) => {
        try {
          const newUser = new User();
          newUser.username = handler.body.username;
          newUser.email = handler.body.email;
          newUser.password = handler.body.password;

          handler.set.status = 201;
          return newUser;
        } catch (e: any) {
          // If unique mongoose constraint (for username or email) is violated
          if (e.name === 'MongoServerError' && e.code === 11000) {
            handler.set.status = 422;
            return {
              message: 'Resource already exists!',
              status: 422,
            };
          }

          handler.set.status = 500;
          return {
            message: 'Unable to save entry to the database!',
            status: 500,
          };
        }
      })
  );