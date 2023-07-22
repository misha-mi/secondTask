
import { TInitialStates, IAddComment, IDeleteComment, IModifyComment } from "./types";


const initialState: TInitialStates = [];

const reducer = (
  state = initialState,
  action: IAddComment | IDeleteComment | IModifyComment
) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        action.payload
      ]
    case "DELETE_COMMENT":
      return [
        ...state.filter(item => !(item.commentID === action.payload))
      ]
    case "MODIFY_COMMENT":
      return [
        ...state.map(item => {
          if (item.commentID === action.payload.commentID) {
            return { ...item, comment: action.payload.newValue }
          }
          return item;
        })
      ]
    default:
      return state;
  }
}

export default reducer;