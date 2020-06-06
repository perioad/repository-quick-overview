import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesSearchComponent } from './repositories-search/repositories-search.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryPageComponent } from './repository-page/repository-page.component';
import { repositoryReducer } from './store/repository.reducers';


@NgModule({
  declarations: [
    AppComponent,
    RepositoriesSearchComponent,
    RepositoriesComponent,
    RepositoryComponent,
    RepositoryPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({ repository: repositoryReducer}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
