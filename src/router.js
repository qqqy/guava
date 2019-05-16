import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Forms/Login';
import LoginForm from './components/Forms/LoginForm';
import HocDemo from './components/HocDemo';
import ReduxDemo from './components/ReduxDemo';
import SortableTreeDemo from './components/SortableTreeDemo';
import DragDemo from './components/DragDemo';
import DragDemoLive from './components/DragDemoLive';
import Parent from './components/ReduxTesting/Parent';
import Child from './components/ReduxTesting/Child';

export default (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={ () => (
      <Login>
        <LoginForm/>
      </Login>
    ) }/>
    <Route path='/reduxdemo' component={ReduxDemo}/>
  </Switch>
)