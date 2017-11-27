const axios = require('axios');

export function fetchPTTData(board, params) {
  return function(dispatch) {
    const URI = 'https://ptt-search-server.herokuapp.com/api?board='+ board +'&inputs=' + params;
    const encodedURI = window.encodeURI(URI);

    dispatch({type: "FETCH_PTT_DATA", payload: axios.get(encodedURI)});
  };
}
