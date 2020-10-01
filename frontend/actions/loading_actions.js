export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const startLoading = loading => {
  return {
    type: START_LOADING,
    loading
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING
  };
};