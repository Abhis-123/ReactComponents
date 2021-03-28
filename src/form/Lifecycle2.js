import React, { Component } from 'react'

export class Lifecycle2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abhi",
             nameparent:props.name
        }
        console.log("lifecycle2 counstructor 1")
    }
    

    static getDerivedStateFromProps(props,state){
        console.log("life cycle2 getDerivedStateFromProps")
        return null
    }

     componentDidMount(){
        console.log("life cycle2 componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("life cycle2 shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("life cycle2 getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("life cycle2 componentDidUpdate")
 
    }
    render() {
        console.log("life cycle2 render")
        console.log(this.state.nameparent)
        return (
            <div>
               LifeCycle2  {this.state.nameparent}
            </div>
        )
    }
}

export default Lifecycle2
