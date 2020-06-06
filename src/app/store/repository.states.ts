import { RepositoryState } from "./repository.reducers";
import { createSelector } from '@ngrx/store';

const selectRepository = (state) => state.repository;

export const selectRepositories = createSelector(
  selectRepository,
  (state: RepositoryState) => {
    return state.repositories;
  },
)