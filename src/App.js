import React, { useEffect, useState } from 'react'
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages';

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/">
        <Home /> 
      </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
