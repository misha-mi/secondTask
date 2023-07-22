
import { TComment } from "../../../@types/main-types";

export type TInitialStates = TComment[];

export interface IAddComment {
  type: "ADD_COMMENT",
  payload: TComment
}

export interface IDeleteComment {
  type: "DELETE_COMMENT",
  payload: string
}

interface IPayloadModify {
  commentID: string,
  newValue: string
}

export interface IModifyComment {
  type: "MODIFY_COMMENT",
  payload: IPayloadModify
}

export type TAddCommentAction = (newComment: TComment) => IAddComment;

export type TDeleteCommentAction = (commentID: string) => IDeleteComment;

export type TModifyCommentAction = (dataForModify: IPayloadModify) => IModifyComment;