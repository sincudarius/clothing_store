import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';

import './App.css';

const HatsPage = () => (
  <>
    <h1>HATS PAGE</h1>
  </>
);

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
