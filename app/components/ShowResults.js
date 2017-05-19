import React from 'react'; 
import ReactDOM from 'react-dom'; 
import api from '../utils/api';
import { Button } from 'react-bootstrap';
import Frown from 'react-icons/lib/fa/frown-o';
import axios from 'axios';
import Spinner from 'react-spinkit';

class ShowResults extends React.Component {
  constructor(props) {
    super();
    this.state = {
      dataToDisplay: {},
    };
  }
  componentDidMount(){
    this.getPttData();
  }

  getPttData(){
    this.setState({
      dataToDisplay: {},
      loading: true
    });

    api.getPttData(this.props.board, this.props.query).then((hits) => {
      this.setState({
        dataToDisplay: hits.data,
        loading:false
      });
    });
  }

  render() {
    let numberOfData = 0;
    if(!this.state.loading){
      let dataObj = this.state.dataToDisplay;
      Object.keys(dataObj).map(key => {
        numberOfData += dataObj[key].length;
      });
      numberOfData = <div>{numberOfData} results</div>;
    }
    return (
      <div>
        <div id="results">
          Results
          {this.state.loading ? <Spinner spinnerName='wandering-cubes'/> : numberOfData}
        </div>
        <div>
          {this.state.dataToDisplay.length != 0 ? <Results contents={this.state.dataToDisplay}/>: null}   
        </div>
      </div>
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
