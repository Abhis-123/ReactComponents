import React ,{Component}from 'react'

class  RefComponent extends Component{
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }

    componentDidMount(){

        this.inputRef.current.focus()
        console.log(this.inputRef)


    }

     
    render(){
    return (
        <div>
            <input type="text" ref={this.inputRef}/>
            <button onClick={this.clickHandler} >Submit</button>
        </div>
    )
}
}

export default RefComponent
