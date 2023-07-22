
import { TAddCardActions, TDeleteCardActions, TModifyCardActions } from "./types";

export const addCard: TAddCardActions = (newCard) => ({ type: "ADD_CARD", payload: newCard });
export const deleteCard: TDeleteCardActions = (idCard) => ({ type: "DELETE_CARD", payload: idCard });
export const modifyCard: TModifyCardActions = (dataForModify) => ({ type: "MODIFY_CARD", payload: dataForModify });

