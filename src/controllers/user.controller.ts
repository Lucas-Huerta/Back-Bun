import { Elysia, t } from 'elysia';
import User from "@/types/User";

export const createUser = async (handler: Elysia.Handler) => {
  try {
    const newUser = new User();
    newUser.username = handler.body.username;
    newUser.email = handler.body.email;
    newUser.password = handler.body.password;

    await newUser.save();

    handler.set.status = 201;
    return { message: 'Resource created successfully!', status: 201 };
  } catch (e: any) {
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
}

export const getUser = async ({ set }: Elysia.Set) => {
  try {
    const users = await User.find({});
    return users;
  } catch (e: unknown) {
    set.status = 500;
    return {
      message: 'Unable to retrieve items from the database!',
      status: 500,
    };
  }
}

export const getByIdUser = async ({ set }: Elysia.Set, handler: Elysia.Handler) => {
  try {
    const { id } = handler.params;

    const existingUser = await User.findById(id);

    if (!existingUser) {
      handler.set.status = 404;
      return {
        message: 'Requested resource was not found!',
        status: 404,
      };
    }

    return existingUser;
  } catch (e: unknown) {
    handler.set.status = 500;
    return {
      message: 'Unable to retrieve the resource!',
      status: 500,
    };
  }
}

export const deleteByIdUser = async (handler: Elysia.Handler) => {
  try {
    const { id } = handler.params;

    const existingUser = await User.findById(id);

    if (!existingUser) {
      handler.set.status = 404;
      return {
        message: `User with id: ${id} was not found.`,
        status: 404,
      };
    }

    await User.findOneAndRemove({ _id: id });

    return {
      message: `Resource deleted successfully!`,
      status: 200,
    };
  } catch (e: unknown) {
    handler.set.status = 500;
    return {
      message: 'Unable to delete resource!',
      status: 500,
    };
  }
}