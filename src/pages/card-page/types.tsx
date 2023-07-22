export interface ICardPage {
  openedCardId: string,
  setOpenedCardId: (pageId: string) => void,
}

export type THandleModify = (key: string, value: string | number) => void

export type TDeleteCommentsByCardId = (cardID: string) => void