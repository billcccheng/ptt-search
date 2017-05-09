import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import ShowResults from './ShowResults';
import Monster from 'react-icons/lib/fa/optin-monster';

function App(props){
  return(
    <div>
      <h1><Monster/> Welcome to PTT Studyabroad Search</h1> 
      <h3>By Bill Cheng(billcccheng@gmail.com) Last Update: 12/12/2016</h3>
      <h5>Updates:</h5>
      <ul>
          <li> Case Insensitive </li>
          <li> Boolean Search </li>
          <li> Can track all documents in study abroad as of 12/5/2016 </li>
          <li> Updates will be done every 6 months </li>
          <li> Will search for 標題 and 內文 simultaneously </li>
      </ul>
      <h5>搜尋可能耗時較久 請耐心等候</h5>
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
    this.submit = this.submit.bind(this);
  }

  submit(event){
    let openSearch = true;
    this.state.inputs.map(Obj => {
      if(Obj.input === "")
        openSearch = false;
    });

    openSearch ? this.setState({search: true}) : this.setState({search: false});
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
      this.setState({ inputs: newInputs });
    }
  }

  handleRemoveQuery(idx){
    console.log("TEST");
  }

  render() {
    return (
      <div>
        <button onClick={this.appendInput}>
         增加關鍵字 
        </button>
          <label>
            {this.state.inputs.map((input, idx) => (
            <div key={idx}>
              <input 
                type="text" 
                onBlur={this.handleQueryChange(idx)}
              />
            </div>
            ))}
          </label>
        <button onClick={this.submit}>
          Submit
        </button>
        {!this.state.search? null : <ShowResults query={this.state.inputs}/>}
      </div>
    );
  }
}

module.exports = App;
