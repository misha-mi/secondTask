import "./comments.sass";
import { IComments, THandleAdd, THandleAddingMode } from "./types";

import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import Comment from "../comment/comment";
import AddItem from "../add-item/add-item";

import { useAppDispatch, useAppSelector } from "../../../store/redux-hooks";
import { selectAuthor, selectComments } from "../../../store/selectors";
import { commentsActions } from "../../../store/ducks/comments";

import { v4 as uuidv4 } from 'uuid';

import { FC, useState } from "react";



const Comments: FC<IComments> = ({ setBlockESC, idCard }) => {

  const dispatch = useAppDispatch();
  const author = useAppSelector(selectAuthor);
  const comments = useAppSelector(selectComments);

  const [addingMode, setAddingMode] = useState<boolean>(false);

  const handleAddingMode: THandleAddingMode = (bool) => {
    setAddingMode(bool);
    bool ? setBlockESC(bool) : setTimeout(() => setBlockESC(bool));
  }

  const { addComment } = commentsActions;
  const handleAdd: THandleAdd = (newCommentText) => {
    dispatch(addComment({
      author: author,
      comment: newCommentText,
      cardID: idCard,
      commentID: uuidv4()
    }));
    handleAddingMode(false);
  }

  return (
    <>
      <Title titleText="Комментарии" />
      <div className="comments__add">
        {
          !addingMode ? (
            <Button
              buttonText="+ Добавить комментарий"
              onClick={() => handleAddingMode(true)}
            />
          ) : (
            <AddItem
              onAdd={handleAdd}
              onClose={() => handleAddingMode(false)}
            />
          )
        }

      </div>
      <div className="comments__wrapper">
        {comments.map(item => item.cardID === idCard ? (
          <Comment
            setBlockESC={setBlockESC}
            commentData={item}
            key={item.commentID}
          />
        ) : null)}
      </div>
    </>
  )
}

export default Comments;