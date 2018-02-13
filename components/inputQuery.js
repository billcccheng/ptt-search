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

  addInputField = () => {
    this.setState({inputs: this.state.inputs.concat([""])});
  }

  deleteInputField = () => {
    this.setState({
      inputs: [...this.state.inputs.slice(0, this.state.inputs.length-1)],
    });
  }

  updateInputValue = (event) => {
    let userInput = event.target.value.trim();
    let index = event.target.name;
    if(this.state.inputs[index] !== userInput)
      this.state.inputs[index] = userInput;
  }

  enterSubmitQuery = (event) => {
    if(event.key === 'Enter')
      this.submitQuery();
  }

  submitQuery = () => {
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
        <button onClick={this.addInputField}>
          增加關鍵字
        </button>
        <button onClick={this.deleteInputField}>
          減少關鍵字
        </button>
        {this.state.inputs.map((input, index) => (
          <div key={index}>
            <input
              className="search-keyword"
              type="text"
              placeholder="keyword"
              name={index}
              onChange={this.updateInputValue}
              onKeyDown={this.enterSubmitQuery}
            />
          </div>
          )
        )}
        <button onClick={this.submitQuery}>
          Submit
        </button>
        {this.props.openSearch ? <ShowResults /> : null}
      </div>
    );
  }
}
