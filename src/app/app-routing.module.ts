import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesSearchComponent } from './repositories-search/repositories-search.component';
import { RepositoryPageComponent } from './repository-page/repository-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RepositoriesSearchComponent,
  },
  {
    path: ':id',
    component: RepositoryPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
