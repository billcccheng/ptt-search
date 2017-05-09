let axios = require('axios');

module.exports = {
  getPttData: () => {
    let axiosArray = [];
    for(let page = 0; page < 60; page++){
      let encodedURI = window.encodeURI("https://raw.githubusercontent.com/billcccheng/ptt-crawler-indexer/threading/data/data-"+ page +".json");
      axiosArray.push(axios.get(encodedURI))
    }
    return axios.all(axiosArray).then((res) => {
      return res;
    });
  }
};
