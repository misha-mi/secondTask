import "./card-page.sass";
import close from "../../assets/trash.png";
import trash from "../../assets/close.png";

import TextArea from "../../component/ui/text-area/text-area";
import SmallButton from "../../component/ui/small-button/small-button";
import Title from "../../component/ui/title/title";
import Comments from "../../component/layout/comments/comments";

import { useAppSelector, useAppDispatch } from "../../store/redux-hooks";
import { cardsActions } from "../../store/ducks/cards";
import { commentsActions } from "../../store/ducks/comments";

import useOutsideClick from "../../hook/use-outside-click";
import useClickKey from "../../hook/use-click-key";

import { FC, useRef, useState } from "react";

import { ICardPage, THandleModify, TDeleteCommentsByCardId } from "./types";

const CardPage: FC<ICardPage> = ({ openedCardId, setOpenedCardId }) => {

  const [blockESC, setBlockESC] = useState(false);
  const pageRef = useRef(null);
  useOutsideClick(pageRef, () => setOpenedCardId("-1"), blockESC);
  useClickKey("Escape", () => setOpenedCardId("-1"), blockESC);

  const dispatch = useAppDispatch();
  const cards = useAppSelector(state => state.cards);
  const openCard = (cards.find(item => item.cardID === openedCardId));

  const columns = useAppSelector(state => state.columns);
  const columnName = openCard?.columnID !== undefined ? columns[openCard.columnID] : "Неизвестная колонка";

  const comments = useAppSelector(state => state.comments);
  const { deleteComment } = commentsActions;

  const deleteCommentsByCardId: TDeleteCommentsByCardId = (cardID) => {
    comments.forEach(item => {
      if (item.cardID === cardID) {
        dispatch(deleteComment(item.commentID));
      }
    })
  }

  const { deleteCard, modifyCard } = cardsActions;

  const handleModify: THandleModify = (key, value) => {
    dispatch(modifyCard({
      cardID: openedCardId,
      key,
      newValue: value
    }));
  }

  const handleDelete = () => {
    dispatch(deleteCard(openedCardId));
    deleteCommentsByCardId(openedCardId);
    setOpenedCardId("-1");
  }

  return (
    <div className="card-page" ref={pageRef}>
      <div className="card-page__header">
        <TextArea
          value={openCard?.name || ""}
          CSSModifier="title"
          setValue={(value) => handleModify("name", value)}
        />
        <div>
          <SmallButton
            imgPng={trash}
            onClick={handleDelete}
          />
        </div>
        <div onClick={() => setOpenedCardId("-1")}>
          <SmallButton imgPng={close} />
        </div>
      </div>
      <p className="card-page__info">
        <span className="card-page__column-name">Колонка: {columnName}</span>
        <span className="card-page__author">Автор: {openCard?.author} </span>
      </p>
      <div className="card-page__description">
        <Title titleText="Описание" />
        <TextArea
          value={openCard?.description || ""}
          setValue={(value) => handleModify("description", value)}
        />
      </div>
      <div className="card-page__comments">
        <Comments
          setBlockESC={setBlockESC}
          idCard={openCard?.cardID || ""}
          setCountComments={handleModify}
        />
      </div>
    </div>
  )
}

export default CardPage;