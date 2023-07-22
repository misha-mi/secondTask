import "./button.sass";

import { FC } from "react";

import { IButton } from "./types";

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