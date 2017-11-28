import React from 'react';
import { connect } from 'react-redux';
import { userSelectBoard } from '../actions/boardActions';
import InputQuery from './inputQuery';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


@connect((store) => {
  return {
    boardState: store.board.selectionState,
    boardName: store.board.selectedBoard,
  };
})

export default class selectBoard extends React.Component {

  render(){
    const options = [
          {value: 'graduate', label: '碩士版 (Graduate)'},
          {value: 'salary', label: '薪水版 (Salary)'},
          {value: 'soft_job', label: '軟體版 (Soft_Job)'},
          {value: 'studyabroad', label: '留學版 (StudyAbroad)'},
          {value: 'tech_job', label: '科技版 (Tech_Job)'}
        ];

    function onBoardChange(board){
      this.props.dispatch(userSelectBoard(board));
    }

    return(
      <div id="main">
        <div id="welcome-section">
          <div id="welcome-title">Welcome to PTT Search</div> 
          <div id="warning">搜尋第一次可能耗時較久</div>
        </div>
        <Select
          className="board-select"
          placeholder="Select a board"
          value={this.props.boardName}
          options={options}
          onChange={onBoardChange.bind(this)}
        />
        {this.props.boardState ? <InputQuery board={this.props.boardName}/>: null}
      </div>
    );
  }
}
