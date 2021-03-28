import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureComp from './PureComponent'
import RegularComponent from './RegularComponent'

 class Pcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"vishwas"
        }
    }
    


componentDidMount(){
     setInterval(
         ()=>{this.setState(
             {
                 name:"pandir"
             }
         )},2000
     )
}
    render() {
        console.log("parent**********************")
        return (
            
            <div>
                parent component
                <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name}/>

                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default Pcomponent
