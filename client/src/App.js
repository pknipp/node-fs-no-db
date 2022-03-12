import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  const [loading, setLoading] = useState(true)

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
  );
}
export default App;
