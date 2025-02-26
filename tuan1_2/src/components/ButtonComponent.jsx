import React, { useState } from 'react';
import './baitap1.css';  

function ButtonComponent() {
  const [inputValue, setInputValue] = useState("");  

  
  const handleChange = (e) => {
    setInputValue(e.target.value);  
  };

  
  const getButtonClass = () => {
    if (inputValue.toLowerCase() === "primary") {
      return "btn-primary";  
    } else if (inputValue.toLowerCase() === "danger") {
      return "btn-danger";  
    } else if (inputValue.toLowerCase() === "success") {
      return "btn-success";  
    }
    return "btn-default";  
  };

  return (
    <div className="button-component">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Nhập button style (primary, danger, success)" 
      />
      <br />
      
      
      <button className={getButtonClass()}>
        Button với class: {inputValue}
      </button>
    </div>
  );
}

export default ButtonComponent;
