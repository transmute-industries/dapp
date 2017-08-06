

function getParameterByName(name: any, url: any) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const handlers = {
  ['@@router/LOCATION_CHANGE']: (state: any, action: any) => {
    let bcid = getParameterByName('bcid', action.payload.search)
    return {
      ...state,
      bcid: bcid
    };
  },
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