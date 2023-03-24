import React, { useState } from 'react';
import './App.css';

function App() {

  const [formData,setFormData] = useState({
    firstName:"" , lastName:"" , email:"" , country:"India",stritAddress:"" , city:"" , state:"Bihar" , postalCode:"",comments:false , candidates:false , offers:false
  });

  function changeHandler(event) {
    const {name,value,checked,type} = event.target;
    setFormData( (prev) => ({...prev ,[name]:type === "checkbox" ? checkbox : value}));
  }
  return (
    <div  className='flex flex-col items-center gap-3'>
      <form>
        <label htmlFor="firstName">First Name</label><br/>
        <input 
          className='outline'
          type="text"
          onChange={changeHandler}
          placeholder="First Name"
          value={formData.firstName}
          name="firstName"/><br/>

        <label htmlFor="lastName">Last Name</label><br/>
        <input 
          className='outline'
          type="text"
          onChange={changeHandler}
          placeholder="Last Name"
          value={formData.lastName}
          name="lastName"/><br/>

        <label htmlFor="email">Email Address</label><br/>
        <input 
          className='outline'
          type="email"
          onChange={changeHandler}
          placeholder="help@example.com"
          value={formData.email}
          name="email"/><br/>
        
        <label htmlFor='country'>Country</label><br/>
        <select 
        className='outline'
        name='country'
        id='country'
        value={formData.country}
        onChange={changeHandler}>
          <option>India</option>
          <option>USA</option>
          <option>Japan</option>
          <option>Rushia</option>
        </select> <br/>

        <label htmlFor="stritAddress">Strit Address</label><br/>
        <input 
          className='outline'
          type="text"
          onChange={changeHandler}
          placeholder="D-34C"
          value={formData.stritAddress}
          name="stritAddress"/><br/>

        <label htmlFor="city">City</label><br/>
        <input 
          className='outline'
          type="text"
          onChange={changeHandler}
          placeholder="Your City Name"
          value={formData.city}
          name="city"/><br/>

        <label htmlFor="state">State</label><br/>
        <input 
          className='outline'
          type="text"
          onChange={changeHandler}
          placeholder="Your State Name"
          value={formData.city}
          name="state"/><br/>

        <label htmlFor="postalCode">Postal Code</label><br/>
        <input 
          className='outline'
          type="text"
          onChange={changeHandler}
          placeholder="854114"
          value={formData.postalCode}
          name="postalCode"/><br/>

          <fieldset>
            <legend>By Email</legend>
            <div>
                <input 
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={changeHandler}
                type="checkbox" /><br/>
                <div>
                  <label>Comments</label><br/>
                  <p>This is the comments</p>
                </div>
            </div>
            
            


          </fieldset>
      </form>
    </div>
  );
}

export default App;
