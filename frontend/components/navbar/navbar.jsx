import React from 'react';

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { SplashNavItems, HomeNavItems } from './navbar_items';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { currentUser, openModal, closeModal} = this.props;
    return (
      <div>
      <div>
        <h1>logo here</h1>
      </div>
        <div>
          <ul>
            {SplashNavItems.map((item, idx) => {
              return(
                <li key={idx}>
                  <a className={item.cName} href={item.url}>{item.title}</a>
                </li>
              );
              })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    loginForm: () => dispatch(openModal('signup')),
    loginForm: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

