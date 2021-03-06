import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './components/Home';
import Login from './components/Forms/Login';
import LoginForm from './components/Forms/LoginForm';
// import HocDemo from './components/HocDemo';
import ReduxDemo from './components/ReduxDemo';
import Example from './Example';
// import SortableTreeDemo from './components/SortableTreeDemo';
// import DragDemo from './components/DragDemo';
// import DragDemoLive from './components/DragDemoLive';
// import Parent from './components/ReduxTesting/Parent';
// import Child from './components/ReduxTesting/Child';
// import Ancestor from './components/ReduxTesting/Ancestor';
// import KeyGiver from './components/keyDemo/KeyGiver';
// import UserUpdater from './components/UserUpdater';
// import ReactAnimation from './components/ReactAnimation';
// import TelfordMartTest from './components/TelfordMartTest';
// import CustomFont from './components/CustomFont';
// import BurgerDemo from './components/BurgerDemo';
// import ContextTesting from './components/ContextTesting';


export default (
  <Switch>
    <Route path="/" component={Example} exact />
    <Route path="/login" component={ () => (
      <Login>
        <LoginForm/>
      </Login>
    ) }/>
    <Route path='/reduxdemo' component={ReduxDemo}/>
  </Switch>
)