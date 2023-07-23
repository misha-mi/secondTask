export interface ICardPage {
  openedCardId: string,
  setOpenedCardId: (pageId: string) => void,
}

export type THandleModify = (key: string, value: string) => void

export type TDeleteCommentsByCardId = (cardID: string) => void