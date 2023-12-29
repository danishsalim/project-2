import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick} style={{ 
      background:!props.isValid?'#FFCCCB':"",
      borderColor:!props.isValid?'red':"",
     }} >
      {props.children}
    </button>
  );
};

export default Button;
