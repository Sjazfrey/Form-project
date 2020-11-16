import React, { Component } from 'react';
import Filter from './filter'

class Conditions extends Component {

render() {
    return(
    <div class="container">
        <form id="contact-form">
        <h2>Medical Questionaire</h2>
        <div class="row">
       
            <div class="col"> 
  
          
     //renders text for form     

          <div className="group">
              <label htmlFor="name">First Name:</label>
              <input type="text" className="form" />
          </div>
          <div className="group">
              <label htmlFor="name">Last Name:</label>
              <input type="text" className="form" />
          </div>
          <div className="group">
              <label htmlFor="gender">Gender:</label>
              <input type="text" className="form" />
          </div>
          <div className="group">
              <label htmlFor="DOB">Date of Birth:</label>
              <input type="text" className="form" />
          </div>
          <div className="group">
              <label htmlFor="exampleInputEmail1">Email:</label>
              <input type="email" className="form" aria-describedby="emailHelp" />
          </div>
          <div className="group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" className="form" />
          </div>

          
        </div>

        <div class="col">
        
        <div className="group">
            <label htmlFor="address">Address:</label>
            <input type="text" className="form" />
        </div>
        <div className="group">
            <label htmlFor="city">City:</label>
            <input type="text" className="form" />
        </div>
        <div className="group">
            <label htmlFor="state">State:</label>
            <input type="text" className="form" />
        </div>
        <div className="group">
            <label htmlFor="zip">Zip Code:</label>
            <input type="text" className="form" />
        </div>
        <div className="group">
            <label htmlFor="status">Martial Status:</label>
            <input type="text" className="form" />
        </div>
        
    
        </div> 
        </div> 
        </form> 
            

        <form  onSubmit={this.submit}>
            <div className="container">
            <div className="row">
            <div className="col">

<br /> <span>Do you smoke any tobacco products?</span><label><input type="radio" id="leans" className="option-input radio" name="score" value=" "onChange={this.handleInputChange} required/>
yes  <label><input type="radio" id="leans" className="option-input radio" name="score" value=" "onChange={this.handleInputChange} required/>
no</label></label>
<span>&nbsp;&nbsp;&nbsp;How much and how often?<input type="text"/></span><br />

<span>Do you drink alcohol?</span><label><input type="radio" id="leans" className="option-input radio" name="score" value=" "onChange={this.handleInputChange} required/>
yes  <label><input type="radio" id="leans" className="option-input radio" name="score" value=" "onChange={this.handleInputChange} required/>
no </label></label>
<span>&nbsp;&nbsp;&nbsp;How much and how often?<input type="text"/></span><br />

        </div>
        </div>
        </div>
        <br /><h3>Medical Conditions</h3><br />
 //renders the multiselect
        <Filter />
        <input type = "checkbox" id = "term" required />
        <label>By Submitting you agree to the terms and conditions</label>
        <br /><button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>

 );
}



}   
export default Conditions;