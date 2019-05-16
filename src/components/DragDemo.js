import React from 'react';

export default function(){

  function handleClick(e){
    let newDiv = document.createElement("div")
    newDiv.classList.add("droppable")
    e.target.appendChild(newDiv)
  }

  return (
    <div id="dragdemo-main">
      <div onClick={handleClick} ></div>
      <div onClick={handleClick} ></div>
      <div onClick={handleClick} ></div>
    </div>
  )
}