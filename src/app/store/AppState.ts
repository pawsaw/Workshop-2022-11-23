import { Store } from '@ngrx/store';
import { booksFeatureName, BooksState } from '../book/store';

export interface AppState {
  [booksFeatureName]: BooksState;
}

export type AppStore = Store<AppState>;
