import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './components/frontpage/portfolio';

import './styles/App.scss';

function App() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
    </Switch>
  );
}

export default App;
