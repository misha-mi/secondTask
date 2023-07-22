import "./app.sass";

import PopupGreeting from "../../pages/popup-greeting/popup-greeting";
import ColumnsPage from "../../pages/columns-page/columns-page";
import CardPage from "../../pages/card-page/card-page";

import { useAppSelector, useAppDispatch } from "../../store/redux-hooks";
import { openedCardActions } from "../../store/ducks/opened-card";

import { FC, useState, useEffect } from "react";

const ShowPage: FC = () => {

  const nameAuthor = useAppSelector(state => state.author);
  const [showPage, setShopPage] = useState<string>("greeting");

  useEffect(() => {
    if (nameAuthor && showPage === "greeting") {
      setShopPage("columns");
    }
  }, [nameAuthor])

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
  const openedCardId = useAppSelector(state => state.openedCard);

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
