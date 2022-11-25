import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store';
import { Book } from '../models';
import { booksCollectionSelector } from '../store';

@Component({
  selector: 'ws-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: 'book-list.component.html',
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books$ = this.store.select(booksCollectionSelector);
  }
}
