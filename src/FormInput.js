import React from 'react';

const FormInput = (props) => {
    console.log(props.label);

  return (
    <div className="form-input-wrapper">
      <label htmlFor={props.inputId}>{props.label}</label>
      <input 
        type="text" 
        name={props.inputId}
        id={props.inputId}
        placeholder={props.placeholder}
       // onChange={handleChange}
      />
    </div>
  );
}

export default FormInput;