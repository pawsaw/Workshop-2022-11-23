import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: ':isbn',
        component: BookDetailComponent,
      },
      {
        path: '',
        component: BookCollectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
