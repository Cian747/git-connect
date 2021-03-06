import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(input: string) {
    interface apiResponse {
      id: number;
      avatar_url: string;

    }
    return this.http.get(`https://api.github.com/users/${input}`);
  };

  getUserRepo(input: string) {
    return this.http.get(`https://api.github.com/users/${input}/repos`);
  }

  findRepos(input: string){
    return this.http.get(`https://api.github.com/search/repositories?q=${input}`);

  }
}

