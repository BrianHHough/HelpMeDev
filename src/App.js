import React from 'react'
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';
import Form__JoinWaitlist from './pages/Form__JoinWaitlist';
import Form__Support from './pages/Form__Support';
import ProfilePage from './pages/profile';


const App = () => {
  return (
    <React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signupform" component={Form__JoinWaitlist} />
        <Route path="/help" component={ProfilePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/support" component={Form__Support} />
      </Switch>
    </Router>
     
  
    </React.Fragment>
  );
}

export default App;
