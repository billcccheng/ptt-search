import { combineReducers } from "redux"

import board from "./boardReducers"
import search from "./searchReducers"

export default combineReducers({
  board,
  search
})

