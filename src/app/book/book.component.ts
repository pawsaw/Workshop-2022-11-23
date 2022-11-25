import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { createLoadBooksStart } from './store';

@Component({
  selector: 'ws-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(createLoadBooksStart());
  }
}
