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
      dataToPrint: [],
      dataToPrintYear: [],
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
      dataToPrint: [],
      loading: true
    });

    let contentHits = [];
    let contentObj = {}
    let seenData = new Set();
    api.getPttData().then((Obj) => {
      for(let i = 0; i < Obj.length; i++) {
        let res = Obj[i];
        res.data.forEach((element) => {
          let data = Object.values(element).toString().toLowerCase();
          let queryArray = this.props.query;
          let hit = queryArray.every((query) => data.includes(query.input.toLowerCase()));
          if(hit && !this.isDuplicate(seenData, element)){
            contentHits.push(element);
            let date = element.日期.split(" ");
            let year = date[date.length-1]; 
            if(!(year in contentObj)){
              contentObj[year] = [];
            }
            contentObj[year].push(element);
          }
        });
      }
      this.setState({
        dataToPrint: contentHits,
        dataToPrintYear: contentObj,
        loading:false
      });
    });
  }

  render() {
    let numbers;
    if(!this.state.loading){
      numbers = <div> {this.state.dataToPrint.length} results</div>;
    }
    return (
      <div>
        <h2>Results</h2>
        {this.state.loading ? <Spinner spinnerName='wandering-cubes'/> : numbers}
        {this.state.dataToPrintYear.length != 0 ? <Results contentsYear={this.state.dataToPrintYear} contents={this.state.dataToPrint}/>: null
        }   
      </div>
    );
  }
}

class Results extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let sortedYears = Object.keys(this.props.contentsYear).reverse();
    return (
        <div>
          { sortedYears.map(year => {
              return(
              <div key={year}>
                <h3>{year}</h3>
                <SubResults results={this.props.contentsYear[year]}/>
              </div>
              )
            })
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
        { this.props.results.map((result) => {
            return (
              <li key={result.link}>
                <a href={result.link}>{result.標題.substring(0,50)}</a> 
              </li>
            )
          }) 
        }
      </ol>
    )
  }
}

module.exports = ShowResults;
