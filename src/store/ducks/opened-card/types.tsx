
export interface ISetIdOpenCard {
  type: "SET_ID_OPEN_PAGE",
  payload: string
}

export type TSetIdOpenCardAction = (pageId: string) => ISetIdOpenCard;