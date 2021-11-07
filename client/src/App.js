//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from '../src/components/LandingPage/LandingPage'
import LoginPage from '../src/components/LoginPage/LoginPage'
import RegisterPage from '../src/components/RegisterPage/RegisterPage'
//client\src\components\LandingPage\LandingPage.js
function App() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path="/RegisterPage" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

