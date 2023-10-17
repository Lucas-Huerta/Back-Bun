import { Elysia } from 'elysia';
import { createPokemon, getByIdPokemon, getPokemon, deleteByIdPokemon } from '@/controllers/pokemon.controller';

export const pokemonRoutes = (app: Elysia) =>
  app.group("pokemon", (app: Elysia) =>
    app
    .post('/post', async (handler: Elysia.Handler) => {
        await createPokemon(handler).then((res) => {
            handler.set.status = res.status;
            handler.set.body = res.message;
        });
        return handler.set.body;
    })

    .get('/all', async ({ set }: Elysia.Set) => {
        let pokemon = null
        await getPokemon({ set })
        .then((res) => {
          pokemon =  res;
        });
        return pokemon;
    })

      .get('/:id', async (handler: Elysia.Handler) => {
        let pokemon = null
        await getByIdPokemon({ set: handler.set }, handler)
        .then((res) => {
          pokemon = res;
        });
        return pokemon;
    })

      .delete('/delete/:id', async (handler: Elysia.Handler) => {
        await deleteByIdPokemon(handler).then((res) => {
          handler.set.status = res.status;
          handler.set.body = res.message;
        });
        return handler.set.body;
    })
);