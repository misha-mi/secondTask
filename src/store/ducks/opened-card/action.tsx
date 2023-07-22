import { TSetIdOpenCardAction } from "./types";

export const setIdOpenPage: TSetIdOpenCardAction = (cardId) => ({ type: "SET_ID_OPEN_PAGE", payload: cardId });