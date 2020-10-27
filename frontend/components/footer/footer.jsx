import React from 'react';
import {connect} from 'react-redux';
import { FooterItems } from './footer_items';

class Footer extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { currentUser } = this.props;
    if (!currentUser) {
      return (
        <>
            <ul>
              {FooterItems.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a target="_blank" className={item.cName} href={item.url}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});


export default connect(mapStateToProps, null)(Footer);

