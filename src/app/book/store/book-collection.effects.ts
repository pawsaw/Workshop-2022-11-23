import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, of, tap } from 'rxjs';
import { AppState } from '../../store';
import { BookApiService } from '../book-api.service';
import {
  loadBooks,
  loadBooksStart,
  loadBooksSuccess,
} from './book-collection.actions';

@Injectable({
  providedIn: 'root',
})
export class BookCollectionEffects {
  loadBooksEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadBooks),
        tap(() => this.store.dispatch(loadBooksStart())),
        exhaustMap(() => this.bookApiService.getAll()),
        tap((books) => this.store.dispatch(loadBooksSuccess({ books })))
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private bookApiService: BookApiService,
    private store: Store<AppState>
  ) {}
}
