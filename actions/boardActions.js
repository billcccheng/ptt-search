export function userSelectBoard(board) {
  if(board) {
    return {
      type: "USER_SELECTED_BOARD",
      payload: {
        selectedBoard: board.value
      },
    }
  }
  return {
    type: "USER_DESELECTED_BOARD",
    payload: {
      selectedBoard: "",
    },
  }
}

