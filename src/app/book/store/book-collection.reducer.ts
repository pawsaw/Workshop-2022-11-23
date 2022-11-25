import { createReducer, on } from '@ngrx/store';
import {
  createBookStart,
  createBookSuccessfull,
  loadBooksStart,
  loadBooksSuccess,
} from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.slice';

export const initialBookCollectionState: BookCollectionSlice = {
  books: [],
  loading: false,
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
  }),
  // load books
  on(loadBooksStart, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadBooksSuccess, (state, action) => {
    return {
      ...state,
      books: action.books,
      loading: false,
    };
  })
);
