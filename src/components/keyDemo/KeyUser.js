// import React from 'react';

// export default function({ user , setUsers , users}){

//   function handleDelete(){
//     setUsers(users.filter(test => user.id !== test.id))
//   }

//   return (
//     <>
//     <h1>{user.name}</h1>
//     <button onClick={handleDelete}>Delete</button>
//     </>
//   )
// }

import React from 'react';

export default class KeyUser extends React.Component{

  handleDelete = () => {
    let filteredArray = this.props.users.filter(test => this.props.id !== test.user.id).sort(() => -1)
    this.props.setUsers(filteredArray)
  }

  render(){
    console.log("KeyUser Rendered")
    return (
    <>
    <h1>{this.props.name}</h1>
    <button onClick={this.handleDelete}>Delete</button>
    </>
  )}
}