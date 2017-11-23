const initState = {
  openSearch: false,
} 

export default function reducer(state=initState, action) {
  switch(action.type) {
    case "START_SEARCH": {
      return {...state, openSearch: action.payload};
    } 
    case "HALT_SEARCH": {
      return {...state, openSearch: action.payload};
    } 
  }
  return state;
}
