import "./text-area.sass";

import { FC, FormEvent, useRef, useEffect } from "react";

import { ITextArea, THandleInputTextArea } from "./types";

const TextArea: FC<ITextArea> = ({ value, CSSModifier = "", modificationMode = true, focus = false, setValue }) => {

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const checkEmpty = (value: string) => {
    if (!value) {
      textAreaRef.current?.classList.add("textArea__empty")
    } else {
      textAreaRef.current?.classList.remove("textArea__empty")
    }
  }

  const handleCalculateHight = () => {

    checkEmpty(value);

    if (textAreaRef.current != null) {
      textAreaRef.current.style.height = 0 + "px";
      textAreaRef.current.style.height = textAreaRef.current?.scrollHeight + "px";
    }
  }

  const handleInputTextArea: THandleInputTextArea = (value) => {
    if (setValue) {
      setValue(value);
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
    <textarea
      className={"textArea " + CSSModifier}
      value={value}
      ref={textAreaRef}
      onInput={(e: FormEvent<HTMLTextAreaElement>) => handleInputTextArea((e.target as HTMLTextAreaElement).value)}
      onBlur={handleBlur}>
    </textarea>
  ) : <div className={"textArea__mod-false " + CSSModifier}>{value}</div>


  return (
    showUI
  )
}



export default TextArea;