import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from '../../store';
import { BookApiService } from '../book-api.service';
import { bookNa } from '../models';
import { createBookStart, createBookSuccessfull } from '../store';

@Component({
  selector: 'ws-book-new',
  styleUrls: ['./book-new.component.scss'],
  templateUrl: './book-new.component.html',
})
export class BookNewComponent implements OnDestroy {
  sink = new Subscription();
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private bookService: BookApiService,
    private store: Store<AppState>
  ) {
    this.form = this.buildForm();
  }

  ngOnDestroy() {
    this.sink.unsubscribe();
  }

  create() {
    const book = { ...bookNa(), ...this.form.value };
    this.store.dispatch(
      createBookStart({
        book,
      })
    );
    this.sink.add(
      this.bookService
        .create(book)
        .pipe(tap(() => this.router.navigateByUrl('/')))
        .subscribe((book) => {
          this.store.dispatch(createBookSuccessfull({ book }));
        })
    );
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      isbn: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', Validators.required],
      author: ['', Validators.required],
      cover: [''],
    });
  }
}
