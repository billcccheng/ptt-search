let axios = require('axios');

module.exports = {
  getPttData: (board, queries) => {
    let params = queries.map(query => query.input);
    let encodeURI = window.encodeURI("https://ptt-search-server.herokuapp.com/api?board=" + board + "&inputs=" + params);
    return axios.get(encodeURI).then((res) => res);
  }
};
