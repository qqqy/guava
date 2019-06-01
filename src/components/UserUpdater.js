import React from 'react';
import {updateUserObject} from "../redux/reducer";
import {connect} from 'react-redux';

class UserUpdater extends React.Component{
  state = {
    displayString: "https://www.thesprucepets.com/thmb/dOOSBeV5F5kIZupvEEu5foLX3Qs=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/25038473_681794915542370_1569672841446555648_n-5a4d46c87bb2830037d31db8-5c451df3c9e77c00014a50a1.jpg"
  }

  render(){
    return (
      <>
      <img src={this.props.userObj.displayString} alt="a maine coon" />
      <button onClick={() => this.props.updateUserObject(this.state)}>UPDATE REDUX</button>
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  const { userObj } = reduxState;
  return { userObj }
}

export default connect(mapStateToProps , {updateUserObject})(UserUpdater)