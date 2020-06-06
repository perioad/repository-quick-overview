import { Action } from '@ngrx/store';
import { IRepo } from '../models/repo.interface';

export enum ERepositoryActions {
  AddRepositories = '[Repository] Add Repositories',
  DeleteRepositories = '[Repository] Delete Repositories',
}

export class AddRepositories implements Action {
  readonly type = ERepositoryActions.AddRepositories;

  constructor(public payload: IRepo[]) {}
}

export class DeleteRepositories implements Action {
  readonly type = ERepositoryActions.DeleteRepositories;
}

export type RepositoryActions = AddRepositories | DeleteRepositories;