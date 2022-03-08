import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BooksManagementComponent } from './pages/books-management/books-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "landing" },
  { path: "landing", component: DashboardComponent },
  { path: "book_management", component: BooksManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
