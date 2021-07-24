import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { User } from '../models/user';
import { Repoview } from '../models/repoview';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  users!: User;
  repos!: Repoview[];

  searchResults(input: string) {
    if (input) {
      console.log(input);
      this.service.getUser(input).toPromise().then((response: any) => {
        console.log(response);
        this.users = new User(response.id, response.login, response.name, response.bio, new Date(response.date), response.location, response.avatar_url, response.followers, response.html_url, response.repos_url)
      })
    };
  }

  //  To get users repos
  searchRepos(input: string) {
    if(input) {
      console.log(input);
      this.service.getUserRepo(input).toPromise().then((response: any) => {
        console.log(response);
        this.repos = response;
      })
    }
  }

  displayRepos() {
    this.service.getUserRepo('Cian747').toPromise().then((response: any) => {
      console.log(response);
      this.repos = response;
    })
  }

  constructor(private service: UserService) { }

  ngOnInit(): void {
    let promise = new Promise<void>((resolve, reject) => {
      this.service.getUser('Cian747').toPromise().then((response: any) => {
        this.users = response;
        this.service.getUserRepo('Cian747').subscribe((response: any) => {
          console.log(response);
          this.repos = response;
          resolve();
        });
        return promise;
      });
    });


  }



}


