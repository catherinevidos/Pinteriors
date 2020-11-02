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
import BoardShowContainer from '../components/boards/board_show_container';
// import CreateBoardContainer from '../components/boards/create_board_container';



const App = () => (
  <div className="app-component">
    <Modal />
    <header>
      <NavBar />
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
      <ProtectedRoute exact path="/pins" component={CreatePinContainer} />
      <ProtectedRoute exact path='/boards/:boardId' component={BoardShowContainer}/>
    </Switch>
    <footer className="footer-container">
      <Footer />
    </footer>
  </div>
);

export default App;
