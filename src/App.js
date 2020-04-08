import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './components/frontpage/portfolio';
import Navbar from './components/navbar';
import Footer from './components/footer';

import './styles/App.scss';
import Resources from './components/resources';

function App() {
  return (
    <>
      <Navbar />
      
      <Switch>
        <Route exact path="/" >
          <Portfolio/>
        </Route>
        <Route exact path="/resources" >
          <Resources/>
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
