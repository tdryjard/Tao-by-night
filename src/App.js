import {Route, Switch} from 'react-router-dom';
import SelectDate from './components/SelectDate';
import Payment from './components/Payment';
import Reservate from './components/Reservate';
import ConnexionPage from './components/ConnexionPage';
import './App.css';

function App() {

  return (
    <div>
      <Switch>
        <Route exact path ="/">{ConnexionPage}></Route>
        <Route path="/choose-date">{SelectDate}</Route>
        <Route path='/payment'>{Payment}</Route>
        <Route path='/reservate'>{Reservate}</Route>
      </Switch>
    </div>
  );
}

export default App;
