import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(input:string){
    // interface apiResponse{
    //   login:string;
    //   id: number;
    //   html_url:string;
    //   avatar_url:any;
    //   repos_url:any;
    // }
   return this.http.get(`https://api.github.com/users/${input}?access_token=${environment.gitApiKey}`);
  };

  getUserRepo(input:string){
    return this.http.get(`https://api.github.com/users/${input}/repos?access_token=${environment.gitApiKey}`);
  }

  getRepos(search:string){
    return this.http.get(`https://api.github.com/users/search/repos${search}?access_token=${environment.gitApiKey}`)
  }
}

