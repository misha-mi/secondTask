export interface ITextArea {
  value: string,
  CSSModifier?: string,
  modificationMode?: boolean,
  focus?: boolean,
  setValue?: (value: string) => void
}

export type THandleInputTextArea = (value: string) => void