import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import Modal from './modal/modal';
import SplashContainer from '../components/splash_page/splash_container';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import PinShowContainer from '../components/pins/pin_show_container';
import UserProfileContainer from '../components/users/user_profile_container';
import CreatePinContainer from '../components/pins/create_pin_container';



const App = () => (
  <div className="app-component">
    <Modal />
    <header>
      <NavBar />
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/pins/:pinId" component={PinShowContainer} />
      <Route exact path="/users/:userId" component={UserProfileContainer} />
      <Route exact path="/pins" component={CreatePinContainer} />
    </Switch>
    <footer className="footer-container">
      <Footer />
    </footer>
  </div>
);

export default App;
