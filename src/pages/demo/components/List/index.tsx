import React, { Fragment, useEffect, useState } from 'react'
import { pokemonApi } from '../../store/demo.actions'
import { ListResponsType } from './list.types'

function List() {
    const { useGetAllPokemonQuery } = pokemonApi
    const { data, isLoading, isSuccess, error } = useGetAllPokemonQuery()
    const [List, setList] = useState<ListResponsType | null>(null)
    useEffect(() => {
        if (isSuccess) {
            setList(data)
        }
        return () => {

        };
    }, [isSuccess])
    return (
        <Fragment>
            <div className="col-6">
                {isLoading ? 'Loading...' :
                    (List && Array.isArray(List.results)) &&
                    List.results.map((item, index) => {
                        return (<div key={'item_' + index}>
                            {item.name}
                        </div>)
                    })
                }
                {error && JSON.stringify(error, null, 2)}
            </div>
        </Fragment>
    )
}

export default List