import "./card.sass";
import comment from "../../../assets/comment.png";
import edit from "../../../assets/edit.png";

import SmallButton from "../../ui/small-button/small-button";
import TextArea from "../../ui/text-area/text-area";

import { useAppDispatch, useAppSelector } from "../../../store/redux-hooks";
import { openedCardActions } from "../../../store/ducks/opened-card";

import { FC, useRef } from "react";

import { ICard } from "./types";

const Card: FC<ICard> = ({ cardName, cardID }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { setIdOpenPage } = openedCardActions;

  const commentsCount = useAppSelector(store => store.comments).filter(item => item.cardID === cardID).length;

  return (
    <div className="card" onClick={() => dispatch(setIdOpenPage(cardID))}>

      <div
        className="card__wrapper"
        ref={cardRef}
        onMouseEnter={() => cardRef.current?.classList.add("card__active")}
        onMouseLeave={() => cardRef.current?.classList.remove("card__active")}
      >

        <TextArea
          value={cardName}
          CSSModifier="card__title"
          modificationMode={false}
        />

        <div className="card__edit">
          <SmallButton imgPng={edit} />
        </div>

        <div className="card__comment">
          <img src={comment} alt="comment" />
          <span>{commentsCount}</span>
        </div>

      </div>
    </div>
  )
}

export default Card;