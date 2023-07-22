import "./small-button.sass";

import { FC } from "react";

import { ISmallButton } from "./types";

const SmallButton: FC<ISmallButton> = ({ imgPng, onClick }) => {
  return (
    <div className="small-button" onClick={onClick}>
      <img src={imgPng} alt="edit" />
    </div>
  )
}

export default SmallButton;