import React from 'react';
import "../styles/ReactAnimation.css";


export default class ReactAnimation extends React.Component{

  state = {
    ready: false
  }
  
  firstEndHandler = () => {
    this.setState({ready: true})
  }

  render(){
    return (
      <>
        <div id="first" onAnimationEnd={this.firstEndHandler}></div>
        <div id="second" className={this.state.ready ? "fire-second" : ""}></div>
      </>
    )
  }
}