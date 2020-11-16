import React, { Component } from 'react';
import './App.css';
import Conditions from "./components/conditions"
import Filter from "./components/filter"

class App extends Component {
      
    constructor(props) {
      
      super(props);
      this.state = {
        first: '',
        last: '',
        gender: '',
        dateofbirth: '',
        email: '',
        phonenumber: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        maritalstatus: '',
      }
    }
    handleSubmit( event ) {
      event.preventDefault();
      console.log(this.state);
    }
    render(){
      return(
        <div>
            <Conditions/>
            {/* <Filter /> */}
        </div>
      )
    }
  }




export default App;
