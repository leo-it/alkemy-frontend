import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Operations from './components/Operations'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/operations" component={Operations}/>


    </Switch>
    </BrowserRouter>
  );
}

export default App;
