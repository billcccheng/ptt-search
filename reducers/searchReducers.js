const initState = {
  openSearch: false,
  fetching: false,
  fetched: false,
  error: false
} 

export default function reducer(state=initState, action) {
  switch(action.type) {
    case "FETCH_PTT_DATA_PENDING": {
      return {...state, fetching: true, openSearch: true}
    }
    case "FETCH_PTT_DATA_REJECTED": {
      return {...state, fetching: false, error: true, resp: action.payload}
    }
    case "FETCH_PTT_DATA_FULFILLED": {
      return {...state, fetching: false, fetched: true, resp: action.payload}
    }
  }
  return state;
}
