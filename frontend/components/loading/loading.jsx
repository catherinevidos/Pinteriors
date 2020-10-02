import React from 'react';
import { connect } from 'react-redux';
import { fetching, fetched} from '../../actions/loading_actions';

function Loading({loading, startLoading, stopLoading}) {

  if (loading === true) {
    return (
      <div className="loading-container">
        <div className="loader">
        </div>
      </div>
    )
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.ui.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: () => dispatch(fetching()),
    stopLoading: () => dispatch(fetched())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
