const initState = {
} 

export default function reducer(state=initState, action) {
  switch(action.type) {
    case "ADD_INPUT": {
      return {...state, shouldDeleteInput: action.payload};
    } 
    case "DELETE_INPUT": {
      return {...state, shouldDeleteInput: action.payload};
    } 
  }
  return state;
}
