// function Provider(store = {inserted:true}){
//   this.state = store
// }

// export default Provider

import React from 'react';

let store;

export default class Provider extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    if(this.props){store = this.props.store}
    this.state = store
  }

  componentDidMount(){
    if(this.props.store){
      this.setState({...this.props.store})
    }
  }

  render(){
    return this.props.children
  }
}