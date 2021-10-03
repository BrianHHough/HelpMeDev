import React from 'react'
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';

function App() {
  return (
    <React.Fragment>
    <Router>

      <Route exact path="/">
      <Home /> 
      </Route>
      <Switch>
      <Route exact path="/signin">
          <SignInPage />
        </Route>
        </Switch>
    </Router>
     
  
    </React.Fragment>
  );
}

export default App;
