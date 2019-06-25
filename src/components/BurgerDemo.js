import React from 'react';
import '../styles/burger.scss';

const styles = {
  textDecoration: "none",
  a: {
    textDecoration: "none !important"
  }
}

export default function (){
  return (
    <div id="burger-demo" >
      <input id="checkbox" type="checkbox"/>
      <div id="target"/>
      <div style={styles}>
        <a href="nonsense">THIS IS A LINK</a>
      </div>
    </div>
  )
}