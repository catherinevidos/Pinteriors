import {
  connect
} from 'react-redux';
import Searchbar from './searchbar';

import { fetchPins, updatePin } from '../../actions/pin_actions';
import {updateSearch} from '../../actions/search_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({
  session,
  entities,
  ui
}) => ({
  currentUser: session && session.id && entities.users[session.id],
  pins: Object.values(entities.pins),
  searchPins: ui.filtered
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPins: () => dispatch(fetchPins()),
    updateSearch: value => dispatch(updateSearch('searchPins', value))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Searchbar));