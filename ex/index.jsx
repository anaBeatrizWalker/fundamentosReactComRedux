import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'

const reducers = combineReducers({
    field: () => ({value: 'Teste'}) //estado fixo
})

ReactDOM.render(
    //criando store (objeto com todos os reducers)
    <Provider store={createStore(reducers)}> 
        <Field initialValue='Mude o label'/>
    </Provider>
    , document.getElementById('app')
)