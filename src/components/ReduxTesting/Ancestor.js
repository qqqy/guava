import React from 'react';
import Provider from './FakeProvider';
import Parent from './Parent';

export default function(props){
  return (
    <Provider store={{inserted: true}}>
      <Parent/>
    </Provider>
  )
}