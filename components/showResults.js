import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

@connect((store) => {
  return {
    error: store.search.error,
    PTTDataFetching: store.search.fetching,
    PTTDataFetched: store.search.fetched,
    PTTResponse: store.search.resp
  };
})
export default class showResults extends React.Component {
  constructor() {
    super();
  }

  componentWillReceiveProps(nextProps) {
    this.sortedYears = [];
    this.numberOfData = 0;
    if(nextProps.PTTResponse) {
      const resp = nextProps.PTTResponse;
      this.results = resp.data;
      Object.keys(this.results).map(key => {
        this.numberOfData += this.results[key].length;
        this.sortedYears.unshift(key);
      });
    }  
  }

  render() {
    if(this.props.PTTDataFetching){
      return(<Spinner className="loading-symbol" name="pacman" />);
    }else if(this.props.error) {
      return(<div>"An Error Occured...Please try again later."</div>);
    }else if(this.props.PTTDataFetched) {
      return(
        <div>
          <h4> Found {this.numberOfData} results </h4>
          {this.sortedYears.map(year => (
            <div key={year}>
              {year} 
              <ol>
                {this.results[year].map(result => (
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
