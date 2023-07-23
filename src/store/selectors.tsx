import { TCard, TComment } from "../@types/main-types";

export const selectAuthor = (state: { author: string }) => state.author;

export const selectOpenedCard = (state: { openedCard: string }) => state.openedCard

export const selectColumns = (state: { columns: string[] }) => state.columns;

export const selectCards = (state: { cards: TCard[] }) => state.cards;

export const selectComments = (state: { comments: TComment[] }) => state.comments;

