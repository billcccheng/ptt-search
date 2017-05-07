import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import ShowResults from './ShowResults';

function App(props){
  return(
    <div>
      <h1>Welcome to PTT Studyabroad Search</h1> 
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
      search: '',
    };
    this.click = this.click.bind(this);
  }

  click(event){
    this.setState(() => {
      return {
        search: this.input.value, 
      }
    });
    event.preventDefault(); 
  }
  render() {
    return (
      <div>
        <form onSubmit={this.click}>
          <label>
            Name:
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <br></br>
          <Button bsStyle="primary" type="submit">
            Submit
          </Button>
        </form>
        {!this.state.search? null : <ShowResults query={this.state.search}/>}
      </div>
    );
  }
}
module.exports = App;
