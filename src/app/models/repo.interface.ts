import { IOwner } from './owner.interface';

export interface IRepo {
  archived: boolean;
  created_at: string;
  description: string;
  forks: number;
  html_url: string;
  id: number;
  language: string;
  name: string;
  open_issues: number;
  owner: IOwner;
  size: number;
  watchers: number;
}