import { combineReducers } from "redux"

import board from "./boardReducers"
import inputQuery from "./inputQueryReducers"

export default combineReducers({
  board,
  inputQuery
})

