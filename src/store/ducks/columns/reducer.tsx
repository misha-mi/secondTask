
import { TInitialStates, ISetColumnName } from "./types";

const initialState: TInitialStates = [
  "TODO",
  "In Progress",
  "Testing",
  "Done"
]

const reducer = (
  state = initialState,
  action: ISetColumnName
) => {
  switch (action.type) {
    case "SET_COLUMN_NAME":
      return [
        ...state.slice(0, action.payload.id),
        action.payload.columnName,
        ...state.slice(action.payload.id + 1)
      ]
    default:
      return state;
  }
}

export default reducer;