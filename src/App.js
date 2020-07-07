import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './components/frontpage/front-page';
import Navbar from './components/navbar';
import Footer from './components/footer';

import './styles/App.scss';
import Covid from './components/covid-19/covid';
import Resources from './components/resources/resources';
// import About from './components/aboutus/about';
import Contact from './components/contact/contact';
import Team from './components/frontpage/team/team';

function App() {
  return (
    <div className="main">
      <Navbar/>

      <Switch>
        <Route exact path="/" >
          <FrontPage/>
        </Route>
        <Route exact path="/covid19">
          <Covid />
        </Route>
        <Route exact path="/resources" >
          <Resources/>
        </Route>
        <Route exact path="/about">
          <Team />
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>

      <Route path="/">
        <Footer />
      </Route>
    </div>
  );
}

export default App;
