
const handlers = {
  ['BCID_RECEIVED']: (state: any, action: any) => {
    return {
      ...state,
      bcid: action.payload.bcid,
    };
  }
};

export const reducer = (state: any, action: any) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return {
    bcid: null,
    ...state
  };
};

export default {
  reducer
}