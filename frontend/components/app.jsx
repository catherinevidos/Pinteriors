import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { SplashContainer } from '../components/splash_container';


const App = () => (
  <div className="app-component">
    <header>
      <Link to="/" className="header-link">
        <h1>Pinteriors</h1>
      </Link>
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
