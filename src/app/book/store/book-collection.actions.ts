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

export const createLoadBooksStart = createAction('[Book] Load Books Start');
export const createLoadBooksComplete = createAction(
  '[Book] Load Books Complete',
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
