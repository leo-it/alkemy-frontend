import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home}/>
      

    </Switch>
    </BrowserRouter>
  );
}

export default App;
