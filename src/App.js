import React from 'react';
import Vote from "./components/Vote/Vote";
import {Switch, Route} from 'router-react-dom'
import SelectDate from './components/SelectDate'
import './App.css';

function App() {

	return (
		<div className="App">
      <Switch>
        <Route exact path ='/'>{SelectDate}</Route>
        <Route exact path ='/payment'>{Payment}</Route>
        <Route exact path ='/reservate'>{Reservate}</Route>
        <Route exact path ='/vote'>{Vote}</Route>
      </Switch>
		</div>
	);
}

export default App;
