import React from 'react';
import './../styles/TelfordMartTest.css';

class TelfordMartTest extends React.Component {
  constructor(){
    super()
    this.testRef = React.createRef();
    this.testRefOne = React.createRef();
    this.testRefTwo = React.createRef();
    this.testRefThree = React.createRef();
    this.testRefFour = React.createRef();
    this.testRefFive = React.createRef();
  }
  state = {
    hide: false,
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    
    if (window.scrollY > window.innerHeight - this.testRef.current.scrollHeight) {
      // console.log("this is the condition:",window.innerHeight - this.testRef.current.scrollHeight)
      this.setState(
        {
          hide: true
        }
        )
      } else {
        this.setState({hide: false})
      }
    }
    
    render() {
      // console.dir(this.testRef)
      console.dir(this.testRef.current)
      // console.log(window.innerHeight)
      return (
        <div id="tm">

        <div className="container" ref={this.testRef}>
          <div></div>
          <div></div>
          <div className={this.state.hide ? 'fake-webmaster' : 'fake-webmaster'} ></div>
        </div>
      
        <div className="container" ref={this.testRef}>
          <div></div>
          <div></div>
          <div className={this.state.hide ? 'fake-webmaster' : 'fake-webmaster'} ></div>
        </div>
      
        <div className="container" ref={this.testRef}>
          <div></div>
          <div></div>
          <div className={this.state.hide ? 'fake-webmaster hide' : 'fake-webmaster'} ></div>
        </div>
      
        <div className="container" ref={this.testRef}>
          <div></div>
          <div></div>
          <div className={this.state.hide ? 'fake-webmaster' : 'fake-webmaster'} ></div>
        </div>
      
        <div className="container" ref={this.testRef}>
          <div></div>
          <div></div>
          <div className={this.state.hide ? 'fake-webmaster' : 'fake-webmaster'} ></div>
        </div>
      
      </div>
    )
  }
}

export default TelfordMartTest