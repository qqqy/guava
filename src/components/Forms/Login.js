import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
  componentDidMount(){
    if(this.props.username){
      this.props.history.push('/info')
    }
  }

  render(){
    // console.log(this.props)
    return (
      <div>{this.props.children}</div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  const {username} = reduxState;
  return {username}
}

export default connect(mapStateToProps)(withRouter(Login))