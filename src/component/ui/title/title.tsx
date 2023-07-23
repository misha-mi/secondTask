import "./title.sass";
import { ITitle } from "./types";

import { FC } from "react";

const Title: FC<ITitle> = ({ titleText }) => {
  return (
    <div className="title">{titleText}</div>
  )
}

export default Title;