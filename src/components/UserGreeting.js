import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render(){
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       Welcome Vishwas
    //     </div>
    //   )
    // }else{
    // return (
    //   <div>
    //     Welcome guest
    //   </div>
    // )
    // let message
    // if (this.state.isLoggedIn) {
    //   message=<div>welcome Viswas </div>
    // }else{
    //   message=<div>welcome guest </div>
    // }

    return(
     this.state.isLoggedIn?
     <div> Welcome viswas</div>:<div>welcome Guest</div>
      
    )
    }
  }


export default UserGreeting
