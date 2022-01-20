import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Members from './members'

ReactDOM.render(
    <div>
        <Family lastName='Silva'>
            <Members name='Guilherme'/>
        </Family>
    </div>
    , document.getElementById('app')
)