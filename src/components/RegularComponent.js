import React, { Component } from 'react'

export class RegularComponent extends Component {
    shouldComponentUpdate(){
        return false
    }
    render() {
        console.log("Regular**********************")
        return (
            <div>
                RegularComponent {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
