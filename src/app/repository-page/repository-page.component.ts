import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectRepositories } from '../store/repository.states';
import { IRepo } from '../models/repo.interface';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss']
})
export class RepositoryPageComponent implements OnInit {

  public isStoreEmpty: boolean = false;
  public repository: IRepo;
  public createdDate: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) { }

  ngOnInit(): void {
    const repositoryId = Number(this.route.snapshot.paramMap.get('id'));

    this.store.pipe(
      select(selectRepositories)
    ).subscribe(
      repositories => {
        if (repositories === null) {
          this.isStoreEmpty = true;
        } else {
          const repository = repositories.find(repository => repository.id === repositoryId);
          this.repository = repository;
          this.createdDate = new Date(repository.created_at).toLocaleString('ru');
        }
      }
    );
  }

}
