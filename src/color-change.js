import React, { useState } from 'react';

const ColorChange = () => {
  const [currentColor, setColor] = useState("Blue");

  const changeColor = () => {
    setColor("Red");
  };

  return (
    <div className="content">
      <div className="details">
        <p className='clr'>Current Color: {currentColor}</p>
        <button className='btns' onClick={changeColor}>Change Color</button>
      </div>
    </div>
  );
};

export default ColorChange;

