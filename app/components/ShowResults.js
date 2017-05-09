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

    api.getPttData().then((Obj) => {
      for(let i = 0; i < Obj.length; i++) {
        let res = Obj[i];
        if(this.state.dataToPrint.length > 1000){
          break;
        }
        res.data.forEach((element) => {
          let data = Object.values(element).toString().toLowerCase();
          let resArray = this.props.query;
          let hit = true;
          for(let i = 0; i < resArray.length; i++){
            if(!data.includes(resArray[i].input.toLowerCase())){
              hit = false;
              break;
            }
          }
          if(hit){
            this.setState({
              dataToPrint: this.state.dataToPrint.concat(element),
            });
          }
        })
      }
      this.setState({
        loading: false,
      })
    });
  }

  render() {
    return (
      <div>
        <h3>Results</h3>
        {this.state.loading ?<Spinner spinnerName='wandering-cubes'/> : null}
        {this.state.dataToPrint.length > 1000 ? <Results show={false}/>: <Results show={true} contents={this.state.dataToPrint}/>}
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
        {!this.props.show ? 
        <div>Too Many Results. Please narrow down your search. <Frown/></div>: 
          this.props.contents.map((element, idx)=>{
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
