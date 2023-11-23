import React, { useState } from "react";

function Buton() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1); 
  };

  return (
    <div>
      <button className="btns" onClick={handleInc}>...PLus...</button>
      <span>@@@@  {count}  @@@@</span>
      <button className="btns" onClick={handleDec}>...MInus...</button>
    </div>
  );
}

export default Buton;
