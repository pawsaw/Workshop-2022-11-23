import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, of } from 'rxjs';
import { BookApiService } from '../book-api.service';
import {
  createLoadBooksComplete,
  createLoadBooksStart,
} from './book-collection.actions';

@Injectable({
  providedIn: 'root',
})
export class BookCollectionEffects {
  loadBooks = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createLoadBooksStart),
        exhaustMap(() => this.bookApiService.getAll()),
        map((books) => createLoadBooksComplete({ books }))
      ),
    {
      dispatch: true,
    }
  );

  constructor(
    private actions$: Actions,
    private bookApiService: BookApiService
  ) {}
}
