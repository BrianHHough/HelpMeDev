import React from 'react'
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';
import TypeFormPage from './pages/typeform';


function App() {
  return (
    <React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signupform" component={TypeFormPage} />
      </Switch>
    </Router>
     
  
    </React.Fragment>
  );
}

export default App;
