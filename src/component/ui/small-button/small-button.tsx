import "./small-button.sass";
import { ISmallButton } from "./types";

import { FC } from "react";


const SmallButton: FC<ISmallButton> = ({ imgPng, onClick }) => {
  return (
    <div className="small-button" onClick={onClick}>
      <img src={imgPng} alt="edit" />
    </div>
  )
}

export default SmallButton;