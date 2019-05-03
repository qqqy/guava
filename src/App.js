import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import router from './router';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        {/* <Navbar/> */}
        {router}
      </HashRouter>
    </Provider>
  );
}

export default App;
