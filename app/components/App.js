import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import ShowResults from './ShowResults';
import FaHandPointerO from 'react-icons/lib/fa/hand-pointer-o';

function App(props){
  return(
    <div id="query-section">
      <h2 id="welcome-title">Welcome to PTT Studyabroad Search</h2> 
      <h4>By Bill Cheng (billcccheng@gmail.com) Last Update: 05/09/2017</h4>
      <ul>
        <li>  Updates description can be found <a href= "https://github.com/billcccheng/ptt-studyabroad-search/blob/master/README.md#change-logs">here</a></li>
        <li>搜尋第一次可能耗時較久 請耐心等候</li>
      </ul>
      <Information/>
    </div>
  );
}

class Information extends React.Component {
  constructor(props) {
    super();
    this.state = {
      search: false,
      inputs:[{input: ""}]
    };
    this.appendInput = this.appendInput.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
  }

  submitQuery(event){
    let openSearch = true;
    this.state.inputs.map(Obj => {
      if(Obj.input === ""){
        openSearch = false;
      }
    });
    openSearch && this.state.inputs.length != 0 ? this.setState({search: true, empty: false}) : this.setState({search: false, empty: true});
    event.preventDefault(); 
  }

  appendInput(){
    this.setState({inputs: this.state.inputs.concat([{input: ''}])});
  }

  handleQueryChange(idx){
    return (event) => {
      const newInputs = this.state.inputs.map((input, sidx) => {
        if (idx !== sidx) return input;
        return { input: event.target.value };
      });
      this.setState({ 
        inputs: newInputs,
        search: false
      });
    }
  }

  handleRemoveQuery(idx){
    return () => {
      this.setState({ 
        inputs: this.state.inputs.filter((s, sidx) => idx !== sidx),
        search: false
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.appendInput}>
           增加關鍵字 
          </button>
          <button type="button" onClick={this.handleRemoveQuery(this.state.inputs.length-1)}>
            減少關鍵字
          </button>
        </div>

        {this.state.inputs.map((input, idx) => (
          <div key={idx}>
            <input 
              type="text" 
              onChange={this.handleQueryChange(idx)}
              placeholder="Insert keyword here"
            />
          </div>
          )
        )}
        {this.state.empty?  <div style={{color:"red", marginLeft:"20px"}}><FaHandPointerO/><b> Input Empty</b></div> : null}
        <button onClick={this.submitQuery}>
          Submit
        </button>
        {this.state.search ? <ShowResults query={this.state.inputs}/> : null}
      </div>
    );
  }
}

module.exports = App;
