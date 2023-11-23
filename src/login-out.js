import React, { useState } from "react";

function Use() {
  const [SignedIn, setSignedIn] = useState(false);

  function handleClick() {
    setSignedIn(function (prev) {
      return !prev;
    });
  }

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {SignedIn ? "Sign out" : "Sign in"}
      </button>
      <p className="sio">{SignedIn ? "You're welcome" : "Please sign in"}</p>
    </div>
  );
}

export default Use;
