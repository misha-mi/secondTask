
export interface ISetName { type: "SET_NAME", payload: string };

export type TSetNameAction = (nameAuthor: string) => ISetName;