import { createAction, props } from '@ngrx/store';
import { Book } from '../models';

export const createBookStart = createAction(
  '[Book] Create Book Start',
  props<{
    book: Book;
  }>()
);

export const createBookSuccessfull = createAction(
  '[Book] Create Book successfull',
  props<{ book: Book }>()
);

// export const createLoadBooksStart = createAction('[Book] Load Books Start');
// export const createLoadBooksComplete = createAction(
//   '[Book] Load Books Complete',
//   props<{
//     books: Book[];
//   }>()
// );

export const loadBooks = createAction('[Book][Load Books] triggered');
export const loadBooksStart = createAction('[Book][Load Books] start');
export const loadBooksSuccess = createAction(
  '[Book][Load Books] success',
  props<{
    books: Book[];
  }>()
);

/**
 *  loadBooks (triggers an effect)
 *    loadBooksStart (in reducer)
 *      async operation goes here
 *    loadBooksSuccess (in reducer)
 *    loadBooksError (in reducer)
 */
