
export type TCard = {
  name: string,
  columnID: number,
  cardID: string,
  description: string
  author: string
};

export type TComment = {
  author: string,
  comment: string,
  cardID: string,
  commentID: string
}
