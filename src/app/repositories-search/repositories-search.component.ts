import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RepositoryService } from '../services/repository.service';
import { Store, select } from '@ngrx/store';
import { RepositoryState } from '../store/repository.reducers';
import { AddRepositories } from '../store/repository.actions';
import { selectRepositories } from '../store/repository.states';
import { IRepo } from '../models/repo.interface';

@Component({
  selector: 'app-repositories-search',
  templateUrl: './repositories-search.component.html',
  styleUrls: ['./repositories-search.component.scss']
})
export class RepositoriesSearchComponent implements OnInit {
  reposSearchForm: FormGroup = new FormGroup({
    repoSearchName: new FormControl(''),
  });

  public fetchedRepos: IRepo[];
  private isSortByWatchersAsc: boolean = false;
  private isSortByNameAsc: boolean = true;

  constructor(
    private repositoryService: RepositoryService,
    private store: Store<RepositoryState>,
  ) {}

  public onSubmit() {
    this.repositoryService
      .getReposInfo(this.reposSearchForm.value.repoSearchName)
      .subscribe(({ items }) => {
        this.store.dispatch(new AddRepositories(items));
        this.fetchedRepos = items;
      });
  }

  public ngOnInit() {
    this.store.pipe(
      select(selectRepositories)
    ).subscribe(repositories => {
      if (repositories !== null) {
        this.fetchedRepos = repositories;
      }
    });
  }

  public onSortByWatchers(): void {
    const repositories = [...this.fetchedRepos];
    if (this.isSortByWatchersAsc) {
      this.isSortByWatchersAsc = !this.isSortByWatchersAsc;
      repositories.sort((a, b) => a.watchers - b.watchers);
    } else {
      this.isSortByWatchersAsc = !this.isSortByWatchersAsc;
      repositories.sort((a, b) => b.watchers - a.watchers);
    }
    this.fetchedRepos = repositories;
  }

  public onSortByName(): void {
    const repositories = [...this.fetchedRepos];
    if (this.isSortByNameAsc) {
      this.isSortByNameAsc = !this.isSortByNameAsc;
      repositories.sort((a, b) => a.name > b.name ? 1 : -1);
    } else {
      this.isSortByNameAsc = !this.isSortByNameAsc;
      repositories.sort((a, b) => a.name < b.name ? 1 : -1);
    }
    this.fetchedRepos = repositories;
  }
}
