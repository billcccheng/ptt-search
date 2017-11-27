import React from 'react';
import ShowResults from './showResults';
import { connect } from 'react-redux';
import { fetchPTTData } from '../actions/searchActions';

@connect((store) => {
  return {
    openSearch: store.search.openSearch
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
      this.setState({ 
        inputs: [...this.state.inputs.slice(0, this.state.inputs.length-1)],
      });
    }
  }

  updateInputValue(index, event) {
    let userInput = event.target.value.trim();
    if(this.state.inputs[index] !== userInput)
      this.state.inputs[index] = userInput;
  }

  submitQuery() {
    let keyWords = this.state.inputs.filter((element) => {
      return element !== "";
    });
    if(keyWords.length > 0) {
      this.props.dispatch(fetchPTTData(this.props.board, this.state.inputs));
    }
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
              onBlur={this.updateInputValue.bind(this, index)}
            />
          </div>
          )
        )}
        <button onClick={this.submitQuery.bind(this)}>
          Submit 
        </button>
        {this.props.openSearch ? <ShowResults /> : null}
      </div>
    );
  }
}
