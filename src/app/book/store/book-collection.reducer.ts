import { createReducer, on } from '@ngrx/store';
import {
  createBookStart,
  createBookSuccessfull,
} from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.slice';

export const initialBookCollectionState: BookCollectionSlice = {
  books: [],
};

export const bookCollectionReducer = createReducer(
  initialBookCollectionState,
  on(createBookStart, (state, action) => {
    return state;
  }),
  on(createBookSuccessfull, (state, action) => {
    return {
      ...state,
      books: [...state.books, action.book],
    };
  })
);
