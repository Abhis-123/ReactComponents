import React, { Component } from 'react'

class MyForm extends Component{

    constructor(props){
        super(props)
        this.state={
            username:"",
            text:"",
            email:"",
            name:"",
            formname:props.name
        }
        
    }
    
 handleUserName=(event)=>{
        this.setState(
            {
                username:event.target.value
            }
        )
        
        
 }

 handleTextArea =(event)=>{
    this.setState(
        {
            text:event.target.value
        }
    )
 }
 handleEmail=(e)=>{
     this.setState(
         {
             email:e.target.value
         }
     )
 }
    handleName=(event)=>{
        this.setState(
            {
                name:event.target.value
            }
        )
    }
    render(){
        return(
            <div>
                <label>{this.state.formname}</label>
            <form>
                <label>Username </label>
                <input type="text" value={this.state.username} onChange={this.handleUserName}/>
                <label>Text  </label>
                <input type="text" value={this.state.text} onChange={this.handleTextArea}/>
                <label>email  </label>
                <input type="email" value={this.state.email} onChange={this.handleEmail}/>
                <label>Topic</label>
                <select value={this.state.name} onChange={this.handleName}>
                    <option value="Abhishek">Abhishek</option>
                    <option value="pandir">pandir</option>
                    <option value="sain">sain</option>
                </select>
                <input value={this.state.name} />

                <button type="submit">submit</button>
            </form>
            
            </div>
        )
    }
}


export default MyForm

