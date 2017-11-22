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
  render() { 
    function addInputField(shouldAdd) {
      if(shouldAdd)
        this.props.dispatch(addInput());
      else
        this.props.dispatch(deleteInput());
    }

    return(
      <div>
        <button onClick={addInputField.bind(this, true)}>
          增加關鍵字 
        </button>
        <button onClick={addInputField.bind(this, false)}>
          減少關鍵字
        </button>
      </div>
    )
  }
}
