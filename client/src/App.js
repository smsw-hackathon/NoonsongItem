import React from 'react'
import Router from './Routes/router'
import {Link} from 'react-router-dom'
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
*/
//import LandingPage from './components/LandingPage/LandingPage.js'
//import LoginPage from './components/LoginPage/LoginPage.js';
//import RegisterPage from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <div>
      <Router />
    </div>
    /*
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />

        </Routes>
      </div>
    </Router>
    */
  )
}

export default App


