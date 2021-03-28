import React, { Component } from 'react'
import Lifecycle2 from './Lifecycle2'

export class lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abhi"
        }
        console.log("counstructor 1")
    }
    

    static getDerivedStateFromProps(props,state){
        console.log("life cycle getDerivedStateFromProps")
        return null
    }
     changeState=()=>{
        this.setState(
            {
                name:"pandir"
            }
        )
        console.log("change state")
    }
     componentDidMount(){
        console.log("life cycle componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("lifefcycle shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("life cycle getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("life cycle componentDidUpdate")
 
    }


    render() {
        console.log("life cycle render")
        return (
            <div>
                <div>
               LifeCycle  {this.state.name}
               </div>
               <button onClick={this.changeState} >change</button>
               <Lifecycle2 name={this.state.name}/> 
            </div>
           
        )
    }
}

export default lifecycle
