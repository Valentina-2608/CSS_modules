import React from 'react';
import { useForm } from 'react-hook-form';

  export const Form = () => {
    
      return (
          <form className="form">
            <div className="form-text">Contact us</div>
            <input type="text"  className="input1" placeholder='Name'></input>
            <input type="text"  className="input2" placeholder='Phone'></input>
            <input type="text"  className="input3" placeholder='E-mail'></input>
            <textarea className="textarea1" placeholder='Message'></textarea>
            <button className="send">Send</button>
            <div className="privacy">Privacy policy</div>
          </form>
      );
  
  };
  



