import React, { Component } from 'react'
import FrInput from './FrInput'

class FrParent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    


    render() {
        return (
            <div>
              <FrInput/>
              <button >Focus input</button>
            </div>
        )
    }
}

export default FrParent
