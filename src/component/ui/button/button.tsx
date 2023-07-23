import "./button.sass";
import { IButton } from "./types";

import { FC } from "react";


const Button: FC<IButton> = ({ buttonText, onClick }) => {

  return (
    <button
      className={"button"}
      onClick={() => onClick()}
    >
      {buttonText}
    </button>
  )
}

export default Button;