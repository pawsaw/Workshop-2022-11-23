import { createFeatureSelector } from '@ngrx/store';
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
