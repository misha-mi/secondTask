import TextArea from "../../ui/text-area/text-area"
import Button from "../../ui/button/button";

import useOutsideClick from "../../../hook/use-outside-click";
import useClickKey from "../../../hook/use-click-key";

import { useForm, SubmitHandler, Controller, FormProvider } from "react-hook-form";
import { FC, useRef } from "react"

import { IAddItem, IForm } from "./types";

const AddItem: FC<IAddItem> = ({ value, onAdd, onClose }) => {

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose);
  useClickKey("Escape", onClose);

  const methods = useForm<IForm>({ defaultValues: { text: value } });
  const { control, handleSubmit } = methods;

  const onSubmit: SubmitHandler<IForm> = (data) => {
    onAdd(data.text);
  }

  return (
    <div ref={ref}>
      <FormProvider {...methods}>
        <Controller
          name="text"
          control={control}
          rules={{
            required: "Обязательное поле!"
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <div>
              <TextArea value={value} setValue={onChange} focus={true} />
              {error && <div style={{ color: "red" }}>{error.message}</div>}
            </div>
          )}
        />
        <Button buttonText={"Сохранить"} onClick={handleSubmit(onSubmit)} />
        <Button buttonText={"Отмена"} onClick={onClose} />
      </FormProvider>
    </div>
  )
}

export default AddItem;