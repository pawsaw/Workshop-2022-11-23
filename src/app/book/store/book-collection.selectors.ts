import { createSelector } from '@ngrx/store';
import { booksFeatureSelector } from './books.feature';

export const booksSliceSelector = createSelector(
  booksFeatureSelector,
  (feature) => feature.bookCollection
);

export const booksCollectionSelector = createSelector(
  booksSliceSelector,
  (slice) => slice.books
);

export const bookByIsbnSelector = (isbn: string) =>
  createSelector(
    booksCollectionSelector,
    (books) => books.find((book) => book.isbn === isbn) ?? null
  );
