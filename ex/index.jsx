import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Members from './members'

ReactDOM.render(
    <div>
        <Family lastName='Silva'>
            <Members name='Guilherme'/>
            <Members name='Larissa'/>
            <Members name='Júlia'/>
            <Members name='Fernando'/>
            <Members name='Rafela'/>
        </Family>
    </div>
    , document.getElementById('app')
)