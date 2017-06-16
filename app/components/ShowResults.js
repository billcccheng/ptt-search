import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Button } from 'react-bootstrap';
import Frown from 'react-icons/lib/fa/frown-o';
import Spinner from 'react-spinkit';
import Request from 'react-http-request';

class ShowResults extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let boards = this.props.board;
    let params = this.props.query.map(query => query.input);
    return(
     <Request
       url={"https://ptt-search-server.herokuapp.com/api?board=" + boards + "&inputs=" + params}
       method='get'
       accept='aplication/json'
       verbose={false}
     >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <Spinner spinnerName='wandering-cubes'/>;
            } else {
              result = JSON.parse(result.text);
              let numberOfData = 0;
              Object.keys(result).map(key => {
                numberOfData += result[key].length;
              });
              return <Results numberOfData={numberOfData} contents={result}/>;
            }
          }
        }
      </Request>
    );
  }
}


class Results extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let sortedYears = Object.keys(this.props.contents).reverse();
    return (
        <div>
					<h4> Results ({this.props.numberOfData} results) </h4>
          <div></div>
          { sortedYears.map(year =>
              (
              <div key={year}>
                {year}
                <SubResults results={this.props.contents[year]}/>
              </div>
              )
            )
          }
        </div>
    );
  }
}


class SubResults extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <ol>
      { this.props.results.map((result) => 
          (
            <li key={result.link}>
              <a target="_blank" href={result.link}>{result.title.substring(0,50)}</a> 
            </li>
          )
        ) 
      }
      </ol>
    )
  }
}

module.exports = ShowResults;
