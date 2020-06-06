import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private api_url: string = 'https://api.github.com/search/repositories?q=';

  constructor(
    private http: HttpClient,
  ) { }

  public getReposInfo(repoName: string): Observable<any> {
    return this.http.get(`${this.api_url}${repoName}`);
  }
}
