import React, { Component } from "react"

export default class ClassComponent extends Component {
    render(){
        return (
            //JSX
            <h1>{this.props.value}</h1>
        )
    }
}