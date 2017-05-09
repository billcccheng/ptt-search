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
    };
  }

  componentDidMount(){
    this.getPttData();
  }

  getPttData(){
    this.setState({
      dataToPrint: [],
      loading: true
    });

    let contentHits = [];
    api.getPttData().then((Obj) => {
      for(let i = 0; i < Obj.length; i++) {
        let res = Obj[i];
        res.data.forEach((element) => {
          let data = Object.values(element).toString().toLowerCase();
          let queryArray = this.props.query;
          let hit = queryArray.every((query) => data.includes(query.input.toLowerCase()));
          if(hit){
            contentHits.push(element);
          }
        });
      }
      this.setState({
        dataToPrint: contentHits,
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
        <h3>Results</h3>
        {this.state.loading ? <Spinner spinnerName='wandering-cubes'/> : numbers}
        <Results contents={this.state.dataToPrint}/>
      </div>
    );
  }
}

class Results extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.contents.map((element, idx)=>{
              return(
                <li key={idx}> 
                  <a href={element.link}>{element["標題"].substring(0,50)}</a>
                </li>
              );
            })
          }
        </ol>
      </div>
    );
  }
}

module.exports = ShowResults;
