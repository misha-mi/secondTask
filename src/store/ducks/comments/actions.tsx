import { TAddCommentAction, TDeleteCommentAction, TModifyCommentAction } from "./types";


export const addComment: TAddCommentAction = (newComment) => ({ type: "ADD_COMMENT", payload: newComment });
export const deleteComment: TDeleteCommentAction = (commentID) => ({ type: "DELETE_COMMENT", payload: commentID });
export const modifyComment: TModifyCommentAction = (dataForModify) => ({ type: "MODIFY_COMMENT", payload: dataForModify })