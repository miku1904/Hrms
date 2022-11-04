import React from 'react'
import { Info, List } from './components'

function Demo() {
    return (
        <div className='container'>
            <h3>
                This is a examples file for understand how components need to be design and bind with store and other utils.
            </h3>
            <div className="row">
                <List />
                <Info />
            </div>
        </div>
    )
}

export default Demo