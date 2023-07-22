export interface IComments {
  setBlockESC: (block: boolean) => void,
  idCard: string,
  setCountComments: (key: string, newValue: number) => void
}

export type THandleAddingMode = (bool: boolean) => void

export type THandleAdd = (newCommentText: string) => void