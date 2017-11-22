import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import SelectBoard from './components/selectBoard';
import store from "./store";
import './css/index.css';

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
  <SelectBoard />
</Provider>, app);
