import { TSetNameAction } from "./types";

export const setName: TSetNameAction = (nameAuthor) => ({ type: "SET_NAME", payload: nameAuthor });