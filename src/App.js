import React from 'react';
import Vote from "./components/Vote/Vote";
import {Switch, Route} from 'react-router-dom'
import SelectDate from './components/SelectDate'
import Payment from './components/Payment'
import Reservate from './components/Reservate'
import ContactUs from './components/ContactUs'
import HomePage from './components/HomePage'
import Recap from './components/Recap'
import './App.css';

function App() {

	return (
		<div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/date' component={SelectDate} />
        <Route path='/vote' component={Vote} />
        <Route path='/recap' component={Recap} />
        <Route path='/payment' component={Payment} />
        <Route path='/reservate' component={Reservate} />
        <Route path='/contact' component={ContactUs}/>
      </Switch>
		</div>
	);
}

export default App;
