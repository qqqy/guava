import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUserId, updateUsername } from '../../redux/reducer';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      loginUsername: '',
      loginPassword: '',
      loginError: false,
      loginErrorMessage: 'Username or password is incorrect. Please try again'
    }
  }

  render() {
    // console.log(returnedFromConnect)
    return (
      <>
        <h1>Login</h1>
        <form>
          <input type='text' name="loginUsername" placeholder="Username" value={this.state.loginUsername} onChange={this.handleFormInputUpdate} ></input>
          <input type='text' name="loginPassword" placeholder="Password" value={this.state.loginPassword} onChange={this.handleFormInputUpdate} ></input>
          <button>Login</button>
        </form>
        {this.state.loginError && <h3>{this.state.loginErrorMessage}</h3>}
      </>
    )
  }

  handleFormUnputUpdate = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
      loginError: false
    })
  }

  handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const { loginUsername , loginPassword } = this.state
    try {
      const res = await axios.post("/auth/login" , {loginUsername , loginPassword})
      this.props.updateUsername(loginUsername);
      this.props.updateUserId(res.date.user_id);
      this.props.history.push('./info');
    } catch (err) {
      this.setState({
        loginUsername: '' , loginPassword: '', loginError: true
      })
    }
  }
}


// const mapStateToProps = (reduxState) => {
//   return {
//     reduxState
//   }
// }

const dispatchToProps = {updateUserId , updateUsername}

var returnedFromConnect = connect(null , dispatchToProps)

const loginFormWithRouter = withRouter(LoginForm)

export default returnedFromConnect(loginFormWithRouter)