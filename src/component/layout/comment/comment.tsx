import "./comment.sass";
import { IComment, THandleToggleChangeMod, THandleModify } from "./types";

import Title from "../../ui/title/title";
import AddItem from "../add-item/add-item";

import { useAppDispatch } from "../../../store/redux-hooks";
import { commentsActions } from "../../../store/ducks/comments";

import { FC, useState } from "react";

const Comment: FC<IComment> = ({ setBlockESC, commentData }) => {

  const [modificationMode, setModificationMode] = useState<boolean>(false);

  const handleToggleChangeMod: THandleToggleChangeMod = (modificationMode) => {

    setBlockESC(true);
    setModificationMode(modificationMode);

    if (!modificationMode) {
      setTimeout(() => setBlockESC(modificationMode))
    }
  }

  const dispatch = useAppDispatch();
  const { deleteComment, modifyComment } = commentsActions;

  const handleDelete = () => {
    setBlockESC(true);
    dispatch(deleteComment(commentData.commentID));
    setTimeout(() => setBlockESC(false));
  }

  const handleModify: THandleModify = (newValue) => {
    dispatch(modifyComment({ commentID: commentData.commentID, newValue: newValue }))
    handleToggleChangeMod(false);
  }

  return (
    <div className="comment">
      <Title titleText={commentData.author} />
      {modificationMode ? (
        <div className="comment__text">
          <AddItem
            value={commentData.comment}
            onAdd={handleModify}
            onClose={() => handleToggleChangeMod(false)}
          />
        </div>
      ) : (
        <>
          <div className="comment__text">{commentData.comment}</div>
          <button onMouseDown={() => handleToggleChangeMod(true)}>Изменить</button>
          <button onMouseDown={handleDelete}>Удалить</button>
        </>
      )}
    </div>
  )
}

export default Comment;