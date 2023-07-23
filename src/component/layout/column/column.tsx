import "./column.sass";

import TextArea from "../../ui/text-area/text-area";
import Card from "../card/card";
import AddItem from "../add-item/add-item";
import Button from "../../ui/button/button";

import { useAppDispatch, useAppSelector } from "../../../store/redux-hooks";
import { cardsActions } from "../../../store/ducks/cards";
import { columnsActions } from "../../../store/ducks/columns";

import { FC, useState, useEffect } from "react";

import { v4 as uuidv4 } from 'uuid';

import { IColumn, THandleAddCard, THandleModifyColumnName } from "./types";


const Column: FC<IColumn> = ({ columnIDForFilter }) => {

  const [addingMode, setAddingMode] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const cards = useAppSelector(state => state.cards);
  const author = useAppSelector(state => state.author);
  const columnName = useAppSelector(state => state.columns[columnIDForFilter]);

  // const cardsByID = useAppSelector((state) => selectCardsById(state, columnIDForFilter));

  useEffect(() => {
    console.log(cards, columnIDForFilter);
  }, [cards]);

  const handleClose = () => {
    setAddingMode(false);
  }

  const { addCard } = cardsActions;
  const handleAddCard: THandleAddCard = (newCardName) => {
    dispatch(addCard({
      name: newCardName,
      columnID: columnIDForFilter,
      cardID: uuidv4(),
      description: "",
      author: author
    }));
    handleClose();
  }

  const { setColumnName } = columnsActions;
  const handleModifyColumnName: THandleModifyColumnName = (newColumnName) => {
    dispatch(setColumnName(columnIDForFilter, newColumnName))
  }

  return (
    <div className="column">

      <div className="column__header">
        <TextArea
          value={columnName}
          CSSModifier="title"
          setValue={handleModifyColumnName}
        />
      </div>

      <div className="column__cards">
        {
          cards.map(({ name, columnID, cardID }) => (
            columnID === columnIDForFilter ? (
              <Card
                cardName={name}
                key={cardID}
                cardID={cardID}
              />
            ) : null
          ))
        }

        {
          !addingMode ? (
            <div className="column__add">
              <Button
                buttonText="+ Добавить карточку"
                onClick={() => setAddingMode(true)}
              />
            </div>
          ) : (
            <AddItem
              onAdd={handleAddCard}
              onClose={handleClose}
            />
          )
        }
      </div>
    </div>
  )
}


export default Column;