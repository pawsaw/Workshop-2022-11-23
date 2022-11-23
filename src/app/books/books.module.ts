import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookCollectionComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule { }
