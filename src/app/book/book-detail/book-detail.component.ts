import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { exhaustMap, switchMap, tap } from 'rxjs/operators';
import { AppState } from '../../store';
import { BookApiService } from '../book-api.service';
import { Book } from '../models';
import { bookByIsbnSelector } from '../store';

@Component({
  selector: 'ws-book-detail',
  styleUrls: ['./book-detail.component.scss'],
  templateUrl: 'book-detail.component.html',
})
export class BookDetailComponent {
  public book$: Observable<Book | null>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookApiService,
    private store: Store<AppState>
  ) {
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.store.select(bookByIsbnSelector(params.isbn)))
    );
  }

  remove() {
    this.route.params
      .pipe(
        exhaustMap((params) => this.bookService.delete(params.isbn)),
        tap(() => this.router.navigateByUrl('/'))
      )
      .subscribe();
  }
}
