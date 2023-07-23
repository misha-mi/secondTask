export interface IComments {
  setBlockESC: (block: boolean) => void,
  idCard: string
}

export type THandleAddingMode = (bool: boolean) => void

export type THandleAdd = (newCommentText: string) => void