import { TCard } from "../../../@types/main-types"

export type TInitialStates = TCard[];

export interface IAdd {
  type: "ADD_CARD",
  payload: TCard
}

export interface IDelete {
  type: "DELETE_CARD",
  payload: string
}

interface IPayloadModify {
  cardID: string,
  key: string,
  newValue: string
}

export interface IModify {
  type: "MODIFY_CARD",
  payload: IPayloadModify
}

export type TAddCardActions = (newCard: TCard) => IAdd;

export type TDeleteCardActions = (newCard: string) => IDelete;

export type TModifyCardActions = (dataForModify: IPayloadModify) => IModify;
