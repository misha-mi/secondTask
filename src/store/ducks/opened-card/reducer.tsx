
import { ISetIdOpenCard } from "./types";

const initialState: string = "-1";

const reducer = (
  state = initialState,
  action: ISetIdOpenCard
) => {
  switch (action.type) {
    case "SET_ID_OPEN_PAGE":
      return action.payload;
    default:
      return state;
  }
}

export default reducer;