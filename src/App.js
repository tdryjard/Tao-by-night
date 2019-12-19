import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SelectDate from './components/SelectDate'
import Payment from './components/Payment'
import Reservate from './components/Reservate'
import './App.css';

function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/">{SelectDate}</Route>
        <Route path='/payment'>{Payment}</Route>
        <Route path='/reservate'>{Reservate}</Route>
      </Switch>
    </div>
  );
}

export default App;
