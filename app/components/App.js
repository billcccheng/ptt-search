import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import ShowResults from './ShowResults';
import Monster from 'react-icons/lib/fa/optin-monster';
import FaHandPointerO from 'react-icons/lib/fa/hand-pointer-o';

function App(props){
  return(
    <div>
      <h2><Monster/> Welcome to PTT Studyabroad Search</h2> 
      <h4>By Bill Cheng (billcccheng@gmail.com) Last Update: 12/12/2016</h4>
      <h5>Updates:</h5>
      <ul>
          <li> Case Insensitive </li>
          <li> Boolean Search </li>
          <li> Can track all documents in study abroad as of 12/5/2016 </li>
          <li> Updates will be done every 6 months </li>
          <li> Will search for 標題 and 內文 simultaneously </li>
      </ul>

      提醒:
      <ul>
        <li>搜尋可能耗時較久 請耐心等候</li>
        <li>請用特定關鍵字 超過1000筆將不會顯示</li>
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

    openSearch ? this.setState({search: true, empty: false}) : this.setState({search: false, empty: true});
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
        search:false
      });
    }
  }

  handleRemoveQuery(idx){
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.appendInput}>
           增加關鍵字 
          </button>
          <button onClick={this.submitQuery}>
            Submit
          </button>
        </div>

        {this.state.inputs.map((input, idx) => (
        <div key={idx}>
          <input 
            type="text" 
            onChange={this.handleQueryChange(idx)}
            placeholder="Insert you keyword here"
          />
        </div>
        ))}
        {this.state. empty?  <div style={{color:"red", marginLeft:"20px"}}><FaHandPointerO/><b> Input Empty</b></div> : null}
        {this.state.search ? <ShowResults query={this.state.inputs}/> : null}
      </div>
    );
  }
}

module.exports = App;
