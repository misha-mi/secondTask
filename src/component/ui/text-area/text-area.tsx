import "./text-area.sass";
import { ITextArea, IForm } from "./types";

import { SubmitHandler, useForm } from "react-hook-form";
import { FC, useRef, useEffect } from "react";


const TextArea: FC<ITextArea> = ({ value, CSSModifier = "", modificationMode = true, focus = false, setValue }) => {

  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      value: value
    }
  });

  const { ref, ...rest } = register("value");

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const checkEmpty = (value: string) => {
    if (!value) {
      textAreaRef.current?.classList.add("text-area__empty")
    } else {
      textAreaRef.current?.classList.remove("text-area__empty")
    }
  }

  const handleCalculateHight = () => {

    checkEmpty(value);

    if (textAreaRef.current != null) {
      textAreaRef.current.style.height = 0 + "px";
      textAreaRef.current.style.height = textAreaRef.current?.scrollHeight + "px";
    }
  }

  const handleInputTextArea: SubmitHandler<IForm> = (value) => {
    if (setValue) {
      setValue(value.value);
    }
    handleCalculateHight();
  }

  const handleBlur = () => {
    if (focus) {
      textAreaRef.current?.focus();
    } else {
      checkEmpty(value);
    }
  }

  useEffect(() => {
    if (focus) {
      setTimeout(() => textAreaRef.current?.focus());
    }
    handleCalculateHight();
  }, [modificationMode])

  const showUI = modificationMode ? (
    <form
      className="text-area_w100p"
      onChange={handleSubmit(handleInputTextArea)}
    >
      <textarea
        className={"text-area " + CSSModifier}
        {...rest}
        ref={(e) => {
          ref(e);
          textAreaRef.current = e;
        }}
        onBlur={handleBlur}>
      </textarea>
    </form>
  ) : <div className={"text-area__mod-false " + CSSModifier}>{value}</div>


  return (
    showUI
  )
}



export default TextArea;