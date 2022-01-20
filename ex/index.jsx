import React from 'react'
import ReactDOM from 'react-dom'
import Segundo, { Primeiro } from './component'

ReactDOM.render(
    //mais de um componente = precisa ser agrupado em uma div
    <div>
        <Primeiro/>
        <Segundo/>
    </div>
    , document.getElementById('app')
)