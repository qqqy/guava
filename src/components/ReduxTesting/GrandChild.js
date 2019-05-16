import React from 'react';
import FakeRedux from './FakeRedux';

function GrandChild(props){
  return (<>
    {props.inserted
    ?
    <h1>Success!</h1>
    :
    <h1>Failure!</h1>
    }
  </>)
}

export default FakeRedux(GrandChild)