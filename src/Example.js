// class Example extends React.Component{

//   state = {
//     toggle: false
//   }
  
//   render(){
//     return(
//       <>
//         {
//           this.state.toggle
//           ?
//           <p>It's True!</p>
//           :
//           <p>It's False!</p>
//         }
//       </>
//     )
//   }
// }

import React, {useState} from "react";

export default function Example(props){

  const toggleArray = useState(false)
  // toggleArray : [false , function]
  const [toggle , setToggle] = toggleArray
  const [state , setState] = useState({
    contact: true
  })
  
  return(
    <>
      {
        // toggle
        state.contact
        ?
        <p>"It's True!"</p>
        :
        <p>"It's False!"</p>
      }
      <button onClick={() => setState({...state , contact: !state.contact})}>Click to Change!</button>
    </>
  )
}