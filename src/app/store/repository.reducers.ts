import { IRepo } from '../models/repo.interface';
import { RepositoryActions, ERepositoryActions } from './repository.actions';

export interface RepositoryState {
  repositories: IRepo[],
  count: number,
}

const initialRepositoryState: RepositoryState = {
  repositories: null,
  count: 0,
};

export function repositoryReducer(state: RepositoryState = initialRepositoryState, action: RepositoryActions): RepositoryState {
  switch (action.type) {
    case ERepositoryActions.AddRepositories:
      return {
        ...state,
        repositories: action.payload,
      };
    case ERepositoryActions.DeleteRepositories:
      return initialRepositoryState;
    default:
      return state;
  }
}