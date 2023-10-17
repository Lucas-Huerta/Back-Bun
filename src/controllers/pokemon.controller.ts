import { Elysia, t } from 'elysia';
import Pokemon from '@/types/Pokemon'

export const createPokemon = async(handler: Elysia.Handler) => {
  try {
    const newPokemon = new Pokemon();
    newPokemon.name = handler.body.name;
    newPokemon.type = handler.body.type;
    newPokemon.level = handler.body.level;

    await newPokemon.save();

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
};

export const getPokemon = async({ set }: Elysia.Set) => {
  try {
    const pokemons = await Pokemon.find({});
    return pokemons;
  } catch (e: unknown) {
    set.status = 500;
    return {
      message: 'Unable to retrieve items from the database!',
      status: 500,
    };
  }
};

export const getByIdPokemon = async({ set }: Elysia.Set, handler: Elysia.Handler) => {
  try {
    const { id } = handler.params;

    const existingPokemon = await Pokemon.findById(id);

    if (!existingPokemon) {
      handler.set.status = 404;
      return {
        message: 'Requested resource was not found!',
        status: 404,
      };
    }

    return existingPokemon;
  } catch (e: unknown) {
    handler.set.status = 500;
    return {
      message: 'Unable to retrieve the resource!',
      status: 500,
    };
  }
};

export const deleteByIdPokemon = async(handler: Elysia.Handler) => {
  try {
    const { id } = handler.params;

    const existingPokemon = await Pokemon.findById(id);

    if (!existingPokemon) {
      handler.set.status = 404;
      return {
        message: `User with id: ${id} was not found.`,
        status: 404,
      };
    }

    await Pokemon.findOneAndRemove({ _id: id });

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
};
