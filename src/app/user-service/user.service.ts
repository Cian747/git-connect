import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class UserService {


  getUser(input:string){
  
  }

  getRepos(search:string){

  }

  constructor(private http:HttpClient) { }
}
