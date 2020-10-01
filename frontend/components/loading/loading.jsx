import React from 'react';
import { connect } from 'react-redux';
import { startLoading, stopLoading} from '../../actions/loading_actions';

function Loading({loading}) {
  if (!loading) {
    return null;
  }


  return (
    <div className="loading-container">
      <div className="loader">
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.ui.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: (loading) => dispatch(startLoading(loading)),
    stopLoading: () => dispatch(stopLoading())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
