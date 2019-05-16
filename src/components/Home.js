import React from 'react';
import axios from 'axios';

const Home = () => {
  let [name , setName] = React.useState('')
  let [pass , setPass] = React.useState('')

  React.useEffect(
    axios.get("/demo/check-session")
    .then(()=> alert("User found!"))
    .catch(()=> alert("User not found!"))
  )

  function handleClick(){
    console.log("HandleClick: ", name , pass)
    axios.post("/demo/login" , {name , pass})
    .then((res) => alert("Success!"))
    .catch(err => alert(err.message))
  }
  return(
    <>
<h1>Home</h1>
<input onChange={(e)=>setName(e.target.value)}/>
<input onChange={(e)=>setPass(e.target.value)}/>
<button onClick={handleClick}>LOGIN</button>
</>
)}


export default Home