import { HomeComponent} from './home/home.component';
import { BookListComponent} from './book-list/book-list.component';
import { BookDetailsComponent} from './book-details/book-details.component';

import { NgModule } from '@angular/core'; //??
import { RouterModule, Routes } from '@angular/router'; //??

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
