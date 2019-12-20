import React, { useState, useEffect } from 'react';
import Vote from "./components/Vote/Vote";
import {Switch, Route} from 'react-router-dom'
import SelectDate from './components/SelectDate'
import Payment from './components/Payment'
import Reservate from './components/Reservate'
import ContactUs from './components/ContactUs'
import HomePage from './components/HomePage'
import Recap from './components/Recap'
import SelectionDeLigne from "./components/SelectionDeLigne";
import LoginPage from "./components/LoginPage";
import SignInPage from "./components/SignInPage";
import './App.css';

function App() {

	const [votes, setVotes] = useState([]);
	const stockVotes = [];

	return (
		<div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/connexion' component={LoginPage} />
        <Route path='/inscription' component={SignInPage} />
        <Route path='/date' component={SelectDate} />
        <Route path='/ligne' component={SelectionDeLigne} />
        <Route path='/vote'>
			<Vote setVotes={setVotes} votes={votes} stockVotes={stockVotes} />
		</Route>
        <Route path='/recap' component={Recap} >
			<Recap choix={votes} />
		</Route>
        <Route path='/payment' component={Payment} />
        <Route path='/reservate' component={Reservate} />
        <Route path='/contact' component={ContactUs}/>
      </Switch>
		</div>
	);
  }
export default App;
