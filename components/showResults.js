import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

@connect((store) => {
  return {
    error: store.search.error,
    PTTDataFetching: store.search.fetching,
    PTTResponse: store.search.resp
  };
})
export default class showResults extends React.Component {
  render() {
    const resp = this.props.PTTResponse;
    if(this.props.PTTDataFetching){
      return(<Spinner className="loading-symbol" name="pacman" />);
    }else if(this.props.error) {
      return("An Error Occured...Please try again later.");
    }else {
      const results = resp.data;
      let numberOfData = 0;
      Object.keys(results).map(key => {
        numberOfData += results[key].length;
      });
      const sortedYears = Object.keys(results).reverse();
      return(
        <div>
          <h4> Found {numberOfData} results </h4>
          {sortedYears.map(year => (
            <div key={year}>
              {year} 
              <ol>
                {results[year].map(result => (
                  <li key={result.link}>
                    <a target="_blank" href={result.link}>{result.title.substring(0,50)}</a> 
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      );
    }
  }
}
