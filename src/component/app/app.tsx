import "./app.sass";

import PopupGreeting from "../../pages/popup-greeting/popup-greeting";
import ColumnsPage from "../../pages/columns-page/columns-page";
import CardPage from "../../pages/card-page/card-page";

import { useAppSelector, useAppDispatch } from "../../store/redux-hooks";
import { selectAuthor, selectOpenedCard } from "../../store/selectors";
import { openedCardActions } from "../../store/ducks/opened-card";

import { FC, useState } from "react";

const ShowPage: FC = () => {

  const nameAuthor = useAppSelector(selectAuthor);
  const [showPage, setShopPage] = useState<string>("greeting");

  if (nameAuthor && showPage === "greeting") {
    setShopPage("columns");
  }

  switch (showPage) {
    case "greeting":
      return <PopupGreeting />;
    case "columns":
      return <ColumnsPage />;
    default:
      return null;
  }
}

const App: FC = () => {

  const dispatch = useAppDispatch();
  const openedCardId = useAppSelector(selectOpenedCard);

  return (
    <div className="app">
      <ShowPage />
      {
        openedCardId !== "-1" ? (
          <div className="app__cardPage">
            <CardPage
              openedCardId={openedCardId}
              setOpenedCardId={(id) => dispatch(openedCardActions.setIdOpenPage(id))}
            />
          </div>
        ) : null
      }
    </div>
  );
}


export default App;
