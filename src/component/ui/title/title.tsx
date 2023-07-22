import "./title.sass";

import { FC } from "react";

import { ITitle } from "./types";

const Title: FC<ITitle> = ({ titleText }) => {
  return (
    <div className="title">{titleText}</div>
  )
}

export default Title;