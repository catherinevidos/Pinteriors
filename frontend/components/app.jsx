import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import SplashContainer from '../components/splash_page/splash_container';
import NavBar from '../components/navbar/navbar';


const App = () => (
  <div className="app-component">
    <Modal />
      <header>
        <NavBar/>
        {/* <Link to="/" className="header-link">
        </Link> */}
      </header>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
