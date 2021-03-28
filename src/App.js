/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './App.css'
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import Person from './components/Person'
// import Stylesheet from './Styles/Stylesheets'
// import Inline from './Styles/inlinestyle'
// import cssmodule from "./css/css.module.css"
// import MyForm from './form/form'
import Lifecycle from './form/lifecycle'
import Fragment from './components/Fragmant'
import Table from './components/Table'
import PureComp from './components/PureComponent'
import RegularComponent from './components/RegularComponent'
import ParentComponent from './components/ParentComponent'
import Pcomponent from './components/Pcomponent'
import RefComponent from './advance/RefComponent'

class App extends Component {
  // p={
  //   id:1,
  //   name:"Abhishek",
  //   age:3,
  //   skill:" angular"
  // }
  render() {
    return (
      <div className="App">
        {/* <Hello />
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        <Message message='Welcome Visitor' />
        <Message message='Welcome Guest' />
        <Counter />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
        <UserGreeting /> */}



        {/* <NameList /> */}

        {/* <ParentComponent /> */}
        {/* <FunctionClick /> */}
        {/* <UserGreeting /> */}

        {/* <NameList/>
       
        <Person  person={this.p}  key={this.p.id}/> */}
{/* 
        <Stylesheet />
        <Inline />

        <h2 className={cssmodule.success}>
          module
        </h2>
        <h2 className="primary">
          module
        </h2> */}

        {/* <MyForm name="ab"/> */}


        {/* <Lifecycle /> */}

        {/* <Fragment /> */}
        {/* <Table /> */}
{/* 
        <PureComp />
        <RegularComponent/> */}

        {/* <Pcomponent /> */}

        <RefComponent />
         </div>

    )
  }
}

export default App
