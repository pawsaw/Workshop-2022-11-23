import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'playground',
    loadChildren: () =>
      import('./playground/playground.module').then((m) => m.PlaygroundModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
