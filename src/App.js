import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LeagueDetail from './components/LeagueDetail/LeagueDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail></LeagueDetail>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
