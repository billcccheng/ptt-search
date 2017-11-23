import React from 'react';
import { connect } from 'react-redux';
import { deleteInput } from '../actions/inputQueryActions';
import { addInput } from '../actions/inputQueryActions';

@connect((store) => {
  return {
    deleteOrNot: store.inputQuery.shouldDeleteInput,
  };
})
export default class inputQuery extends React.Component {
  constructor() {
    super();
    this.state = {inputs:[""]};
  }
  
  modifyInputField(shouldAdd) {
    if(shouldAdd) {
      this.setState({inputs: this.state.inputs.concat([""])});
    }else {
      this.state.inputs.pop();
      this.setState({ 
        inputs: this.state.inputs,
      });
    }
  }

  updateInputValue(index, event) {
    this.state.inputs[index] = event.target.value.trim();
  }

  submitQuery() {
    console.log(this.state.inputs);
    let keyWords = this.state.inputs.filter((element) => {
      return element !== "";
    });
  }

  render() { 
    return(
      <div>
        <button onClick={this.modifyInputField.bind(this, true)}>
          增加關鍵字 
        </button>
        <button onClick={this.modifyInputField.bind(this, false)}>
          減少關鍵字
        </button>
        {this.state.inputs.map((input, index) => (
          <div key={index}>
            <input 
              className="search-keyword"
              type="text" 
              placeholder="keyword"
              onChange={this.updateInputValue.bind(this, index)}
            />
          </div>
          )
        )}
        <button onClick={this.submitQuery.bind(this)}>
          Submit 
        </button>
      </div>
    )
  }
}
