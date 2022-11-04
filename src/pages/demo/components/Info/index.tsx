import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React, { useEffect } from 'react'
import { pokemonApi } from '../../store/demo.actions'

function Info() {
    const { useGetPokemonByNameQuery } = pokemonApi

    return (
        <div className="col-6">

        </div>
    )
}

export default Info