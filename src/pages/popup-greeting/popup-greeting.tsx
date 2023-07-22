import "./popup-greeting.sass";

import { useAppDispatch } from "../../store/redux-hooks";
import { authorActions } from "../../store/ducks/author";

import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";

import { IForm } from "./types";

const PopupGreeting: FC = () => {

  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

  const submit: SubmitHandler<IForm> = ({ name }) => {
    dispatch(authorActions.setName(name));
  }

  return (
    <div className="popupGreeting">
      <form onSubmit={handleSubmit(submit)} className="popupGreeting__window">
        <label className="popupGreeting__question">Привет, как тебя зовут?</label>
        <input
          type="text"
          className="popupGreeting__input"
          {...register("name", { required: true })} />
        {errors.name && <div style={{ color: "red" }}>Обязательное поле!</div>}
        <button className="popupGreeting__button">Подтвердить</button>
      </form>
    </div>
  )
}

export default PopupGreeting;