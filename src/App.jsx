import React from 'react';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
