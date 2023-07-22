export interface IColumn {
  columnIDForFilter: number
}

export type THandleAddCard = (newCardName: string) => void

export type THandleModifyColumnName = (newColumnName: string) => void