import React from 'react';

export default function(){

  function handleClick(e){
    e.target.appendChild(document.getElementById('newDiv'))
  }
  
  function drag(e , id){
    e.dataTransfer.setData("id" , id)
    console.log(id)
  }

  function prevent(e){
    e.preventDefault();
  }

  function drop(e){
    e.target.appendChild(document.getElementById(e.dataTransfer.getData("id")))
  }
  
  return(
    <div id="dragdemo-main">
      <div onClick={handleClick} onDragOver={prevent} onDrop={drop} ></div>
      <div onClick={handleClick} onDragOver={prevent} onDrop={drop} ></div>
      <div onClick={handleClick} onDragOver={prevent} onDrop={drop} ></div>
      <div id="newDiv" className="droppable" draggable
        onDragStart={(e) => drag(e , "newDiv")}
      />
    </div>
  )
}