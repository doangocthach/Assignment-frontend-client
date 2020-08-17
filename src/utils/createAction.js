export default ({ type, params, process }) => {
  const pendingAction = () => ({
    type: `${type}_PENDING`,
  });
  const successAction = (data) => ({
    type: `${type}_SUCCESS`,
    payload: data,
  });
  const errorAction = (error) => ({
    type: `${type}_ERROR`,
    payload: error,
  });

  const action = async (dispatch, getState, objDeps) => {
    dispatch(pendingAction());
    try {
      let data = await process(params);
      return dispatch(successAction(data));
    } catch (e) {
      return dispatch(errorAction(e.message));
    }
  };
  return action;
};
