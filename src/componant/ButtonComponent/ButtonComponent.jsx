import React from 'react';
import './buttonComponent.css';

function ButtonComponent() {
  const clickMe = () => {
    alert('Hi');
  };
  return (
    <div className="button-component">
      <button onClick={clickMe}>Click Me</button>
    </div>
  );
}

export default ButtonComponent;
