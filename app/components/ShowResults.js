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
      dataToDisplay: [],
    };
  }

  componentDidMount(){
    this.getPttData();
  }

  isDuplicate(seenData, data){
    if(seenData.has(data.link))
      return true;
    seenData.add(data.link);
    return false;
  }

  getPttData(){
    this.setState({
      dataToDisplay: {},
      loading: true
    });

    let contentHitObject = {}
    let seenData = new Set();
    api.getPttData().then((Obj) => {
      for(let i = 0; i < Obj.length; i++) {
        let res = Obj[i];
        res.data.forEach((datam) => {
          let data = Object.values(datam).toString().toLowerCase();
          let queryArray = this.props.query;
          let hit = queryArray.every((query) => data.includes(query.input.toLowerCase()));
          if(hit && !this.isDuplicate(seenData, datam)){
            let date = datam.日期.split(" ");
            let year = date[date.length-1]; 
            if(/^\d+$/.test(year)){
              if(!(year in contentHitObject)){
                contentHitObject[year] = [];
              }
              contentHitObject[year].push(datam);
            }
          }
        });
      }
      this.setState({
        dataToDisplay: contentHitObject,
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
        <h2>Results</h2>
        {this.state.loading ? <Spinner spinnerName='wandering-cubes'/> : numberOfData}
        {this.state.dataToDisplay.length != 0 ? <Results contents={this.state.dataToDisplay}/>: null}   
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
                <h3>{year}</h3>
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
              <a href={result.link}>{result.標題.substring(0,50)}</a> 
            </li>
          )
        ) 
      }
      </ol>
    )
  }
}

module.exports = ShowResults;
