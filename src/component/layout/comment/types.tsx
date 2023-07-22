import { TComment } from "../../../@types/main-types";

export interface IComment {
  setBlockESC: (block: boolean) => void
  commentData: TComment,
}

export type THandleToggleChangeMod = (modificationMode: boolean) => void

export type THandleModify = (newCommentText: string) => void