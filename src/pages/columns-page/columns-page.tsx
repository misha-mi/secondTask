import "./columns-page.sass";

import Column from "../../component/layout/column/column";
import TextArea from "../../component/ui/text-area/text-area";

import { useAppSelector, useAppDispatch } from "../../store/redux-hooks";
import { authorActions } from "../../store/ducks/author";

import { FC } from "react";

const ColumnsPage: FC = () => {

  const dispatch = useAppDispatch();
  const userName = useAppSelector(state => state.author);
  const columns = useAppSelector(state => state.columns);

  return (
    <div className="columns-page">
      <TextArea value={userName} CSSModifier="columns-page__name" setValue={(nameAuthor) => dispatch(authorActions.setName(nameAuthor))} />
      <div className="columns-page__wrapper">
        {columns.map((item, id) => (
          <Column
            columnIDForFilter={id}
            key={id}
          />
        ))}
      </div>
    </div>
  )
}

export default ColumnsPage;