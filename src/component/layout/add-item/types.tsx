export interface IAddItem {
  value?: string,
  onAdd: (name: string) => void,
  onClose: () => void
}

export interface IForm {
  text: string
}