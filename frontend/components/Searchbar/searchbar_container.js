import {
  connect
} from 'react-redux';
import Searchbar from './searchbar';

const mapStateToProps = ({
  session,
  entities
}) => ({
  currentUser: session && session.id && entities.users[session.id]
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, null)(Searchbar);