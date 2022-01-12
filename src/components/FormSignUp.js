import React, { useState } from 'react';

import '../App.css'


const FormSignup = ({ setToggle} ) => {

  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: ""
  })

  const [submitvalidation, setSubmitvalidation] = useState(false)


 

  const handleChange = e => {
    const { name, value } = e.target;
    setInitialState({
      ...initialState,
      [name]: value
    });
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
     let messageError = "";

    if (!initialState.name) {
      nameError = "Name cannot be blank";
    } 

    if (!initialState.message) {
      messageError = "Message cannot be blank";
    } 

    if (initialState.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (emailError, nameError && messageError ) {
      setInitialState({ emailError, nameError, messageError });
      return false;
    }

    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(initialState);
      //Clear
      setSubmitvalidation(true)
      
    }
  };


  return (
    <div className='section'>
      <form name="contact" method="post" className='form' onSubmit='submit' className='form' >
      <input type="hidden" name="form-name" value="contact" />
        
        <div>
        <h1>Let's Talk!</h1>
        <p>
        I will get back to you within one to two days through email. Also please don't forget to check your spam account just in case!
        </p>
        <div className='form-inputs'>
          <label className='form-label'>Name *</label>
          <div className='test'>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder=''
            value={initialState.name}
          onChange={handleChange}
          required
          />
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {initialState.nameError}
          </div>

        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email *</label>
          <div className='test'>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder=''
            value={initialState.email}
          onChange={handleChange}
          required
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
            {initialState.emailError}
          </div>
          </div>

        <div className='form-inputs'>
          <label className='form-label'>Subject *</label>
          <div className='test'>
          <textarea
            className='form-input'
            name='message'
            placeholder=''
            value={initialState.message}
          onChange={handleChange}
          required
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
            {initialState.messageError}
          </div>
         </div>
  
       
         <button className='form-input-btn' type='submit'>
         SEND REQUEST
       </button>
       
        </div>
      </form>
      </div>
      
    
  );
};

export default FormSignup;