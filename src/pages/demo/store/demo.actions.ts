import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'



const endpoints = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, "pokemonApi">) => ({
    getPokemonByName: builder.query<any, string>({
        query: (name) => `pokemon/${name}`,
    }),
    getAllPokemon: builder.query<any, void>({
        query: () => `pokemon`,
    }),
})

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints,
})

// export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokemonApi