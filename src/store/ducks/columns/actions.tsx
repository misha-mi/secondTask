import { TSetColumnNameAction } from "./types";


export const setColumnName: TSetColumnNameAction = (id, columnName) => ({ type: "SET_COLUMN_NAME", payload: { id, columnName } }); 