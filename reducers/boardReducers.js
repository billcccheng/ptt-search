const initState = {
  boardState: false,
  selectedBoard: null 
} 

export default function reducer(state=initState, action) {
  switch(action.type) {
    case "USER_SELECTED_BOARD": {
      return {...state, boardState: true, selectedBoard: action.payload.selectedBoard};
    } 
    case "USER_DESELECTED_BOARD": {
      return {...state, boardState: false, selectedBoard: action.payload.selectedBoard};
    } 
  }
  return state;
}
