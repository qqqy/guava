import React from 'react';
import PropTypes from 'prop-types';

class ContextTesting extends React.Component{
  render(){
    console.log(this.context)
    return (
      <>this is contexty?</>
    )
  }
}

ContextTesting.contextType = {
  store: PropTypes.object
}

export default ContextTesting