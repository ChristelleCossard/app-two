import React, { useState } from 'react';
import FormInput from './FormInput';
import Button from './Button';

const ContactForm = () => { 
    
    const [count, setCount] = useState(10);

    const handleClick = (node) => {
        if (node === '-'){
            setCount(count - 1); 
            return; 
        } else
        setCount(count + 1);
    };

    const handleChange = (event) => {
        console.log(event.target.value);
      };

  return (
    <div>
      <form>
      <FormInput
          inputId={Math.random()}
          label="Titre du message"
          placeholder="Saisissez ici le titre du message"
          onChange={handleChange}
        />
       <FormInput
          inputId={Math.random()}
          label="Contenu du message"
          placeholder="Saisissez ici le contenu du message"
          onChange={handleChange}
        />
       
         <Button 
            label = "Envoyer"   
        />
        <p></p>
        <p></p>
       
      </form>
      <div>
      <Button 
            label = "-"
            handleClick = {() =>handleClick('-')}
        />
         <Button 
            label = "+" 
            handleClick = {() =>handleClick('+')}
        />
        </div>
        {count}
    </div>
  );
}

export default ContactForm;