
import { ISetName } from "./types";

const initialState: string = "";


const reducer = (state = initialState, action: ISetName) => {
  switch (action.type) {
    case "SET_NAME":
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
