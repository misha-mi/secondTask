
export type TInitialStates = string[];

export interface ISetColumnName {
  type: "SET_COLUMN_NAME",
  payload: { id: number, columnName: string }
}

export type TSetColumnNameAction = (
  id: number,
  columnName: string
) => ISetColumnName;