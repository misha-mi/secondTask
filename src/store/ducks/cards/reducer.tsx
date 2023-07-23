
import { TInitialStates, IAdd, IDelete, IModify } from "./types";

const initialState: TInitialStates = [];

const reducer = (
  state = initialState,
  action: IAdd | IDelete | IModify
) => {
  switch (action.type) {
    case "ADD_CARD":
      return [
        ...state,
        action.payload
      ]
    case "DELETE_CARD":
      return [
        ...state.filter(item => !(item.cardID === action.payload))
      ]
    case "MODIFY_CARD":
      return [
        ...state.map(item => {
          if (item.cardID === action.payload.cardID) {
            switch (action.payload.key) {
              case "name":
                return { ...item, name: action.payload.newValue }
              case "description":
                return { ...item, description: action.payload.newValue }
            }
          }
          return item;
        })
      ]
    default:
      return state
  }
}

export default reducer;