import { createReducer, on } from '@ngrx/store';
import {
  createBookStart,
  createBookSuccessfull,
  createLoadBooksComplete,
} from './book-collection.actions';
import { bookCollectionAdapter } from './book-collection.adapter';
import { BookCollectionSlice } from './book-collection.slice';

export const initialBookCollectionState: BookCollectionSlice = {
  ...bookCollectionAdapter.getInitialState(),
};

export const bookCollectionReducer = createReducer(
  initialBookCollectionState,
  on(createBookStart, (state, action) => {
    return state;
  }),
  on(createBookSuccessfull, (state, action) => {
    return {
      ...bookCollectionAdapter.addOne(action.book, state),
    };
  }),
  on(createLoadBooksComplete, (state, action) => {
    return {
      ...bookCollectionAdapter.addMany(action.books, state),
    };
  })
);
