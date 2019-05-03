import React from 'react';
import {connect} from 'react-redux';
import {changeString} from '../redux/reducer'
import JustJSX from './JustJSX';

function ReduxDemo (props){
  console.log(props.toChange)
  props.changeString("I am a changed string!")
  console.log(props.toChange)
  return(
    <>
    <h1>These are my Props</h1>
    {JSON.stringify(props)}
    {JustJSX}
    </>
  )
}

export default connect(function (state) {return {reduxDemo: state.reduxDemo , toChange: state.toChange}} , {changeString} )(ReduxDemo)

// let propsToInsert = bob(reduxState)

// <ReduxDemo props={...props , ...propsToInsert, ...actionCreators}