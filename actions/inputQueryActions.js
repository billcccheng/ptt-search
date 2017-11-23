export function startSearch() {
  return {
    type: "START_SEARCH",
    payload: true 
  }
}

export function haltSearch() {
  return {
    type: "HALT_SEARCH",
    payload: false 
  }
}
