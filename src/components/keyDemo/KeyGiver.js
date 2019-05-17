import React from 'react';
import KeyUser from './KeyUser';

// export default function(){

//   const [users , setUsers] = React.useState([{name: "David" , id: 1},{name: "REMOVE" , id: 2},{name: "Chancy" , id: 3},{name: "Orbrihim" , id: 4},{name: "Candice" , id: 5},{name: "Poko" , id: 6},])

//   const usersArray = users.map((user , i) => (
//     <>
//     <KeyUser
//       key={i}
//       user={user}
//       setUsers={setUsers}
//       users={users}
//     />
//     </>
//   ))
//   console.log("KeyGiver Rendered")
//   return (
//     usersArray
//   )
// }

let userId = 7

export default class KeyGiver extends React.Component{
  state = {
    users: [{user: {name: "David" , id: 1}},{user: {name: "REMOVE" , id: 2}},{user: {name: "Chancy" , id: 3}},{user: {name: "Orbrihim" , id: 4}},{user: {name: "Candice" , id: 5}},{user: {name: "Poko" , id: 6}},],
    newUser: {user: {name: ''}}
  }
  render(){
    console.log("KeyGiver Rendered")
    const usersArray = this.state.users.map((user , index) => (
      <KeyUser
        key={index}
        {...user.user}
        setUsers={(newArr) => this.setState({
          users: newArr
        })}
        users={this.state.users}
      />
    ))
    return (
      <>
      <h1>Add User</h1>
      <input placeholder="name" value={this.state.newUser.user.name} onChange={(e) => this.setState({newUser: {user: {[e.target.placeholder]: e.target.value , id: userId++}}})}/>
      <button onClick={() => this.setState({users: [...this.state.users , this.state.newUser] , newUser: {user: {name: ''}}})}>SET</button>
      {usersArray}
      </>
    )
  }
}