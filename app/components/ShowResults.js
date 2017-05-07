import React from 'react';
import ReactDOM from 'react-dom';

class ShowResults extends React.Component {
  render() {
    return (
      <div>
        <h3>Friends</h3>
        <h4>{this.props.query}</h4>
      </div>
    );
  }
}

module.exports = ShowResults;
