import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class selectBoard extends React.Component {

  render(){
    const options = [
          {value: 'graduate', label: '碩士版 (Graduate)'},
          {value: 'salary', label: '薪水版 (Salary)'},
          {value: 'soft_job', label: '軟體版 (Soft_Job)'},
          {value: 'studyabroad', label: '留學版 (StudyAbroad)'},
          {value: 'tech_job', label: '科技版 (Tech_Job)'}
        ];

    return(
      <Select
        className="bill"
        placeholder="Select a board"
        removeSelected={false}
        options={options}
      />
    );
  }
}
