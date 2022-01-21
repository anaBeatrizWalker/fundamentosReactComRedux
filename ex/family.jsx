import React from "react"
import Members from "./members"

export default props => (
    <div>
        <h1>Familia {props.lastName}</h1>
        {/*Clona somente um*/}
        { /*React.cloneElement(props.children, {...props}) */}
        {/*Retorna mais de um*/}
        { React.Children.map(props.children, 
            child => React.cloneElement(child, {...props})) }
    </div>
)