import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Operations from './components/Operations'
import Category from './components/Category'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/operations" component={Operations}/>
      <Route path="/category" component={Category}/>


    </Switch>
    </BrowserRouter>
  );
}

export default App;
