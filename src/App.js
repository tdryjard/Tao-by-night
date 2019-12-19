import React from 'react';
import Vote from "./components/Vote/Vote";
import {Switch, Route} from 'react-router-dom'
import SelectDate from './components/SelectDate'
import Payment from './components/Payment'
import Reservate from './components/Reservate'
import './App.css';

function App() {

	return (
		<div className="App">
      <Switch>
        <Route exact path='/' component={SelectDate} />
        <Route path='/payment' component={Payment} />
        <Route path='/reservate' component={Reservate} />
        <Route path='/vote' component={Vote} />
      </Switch>
		</div>
	);
}

export default App;
