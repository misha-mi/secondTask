export interface ITextArea {
  value: string,
  CSSModifier?: string,
  modificationMode?: boolean,
  focus?: boolean,
  setValue?: (value: string) => void
}

export interface IForm {
  value: string
}