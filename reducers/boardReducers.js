const initState = {
  selectionState: false,
  selectedBoard: null 
} 

export default function reducer(state=initState, action) {
  switch(action.type) {
    case "USER_SELECTED_BOARD": {
      return {...state, selectionState: true, selectedBoard: action.payload.selectedBoard};
    } 
    case "USER_DESELECTED_BOARD": {
      return {...state, selectionState: false, selectedBoard: action.payload.selectedBoard};
    } 
  }
  return state;
}
