import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { bookCollectionReducer } from './book-collection.reducer';
import {
  BookCollectionSlice,
  bookCollectionSliceName,
} from './book-collection.slice';

export interface BooksState {
  [bookCollectionSliceName]: BookCollectionSlice;
}

export const booksFeatureName = 'books';

export const booksFeatureSelector = createFeatureSelector<BooksState>(
  booksFeatureName
);

export const booksReducer: ActionReducerMap<BooksState> = {
  bookCollection: bookCollectionReducer,
};
