import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  users!: User;


  searchResults(input: string) {


    if (input) {
      console.log(input);
      this.service.getUser(input).toPromise().then((response: any) => {
        console.log(response);
        // this.users.push(response);
        this.users = new User(response.id, response.login, response.avatar_url, response.html_url, response.repos_url)
      })

      // this.service.getUserRepo(input)
      // console.log(this.service.getUserRepo(input))
    };
  }


  searchRepos(input: string) {
    if (input) {
      console.log(input);
      this.service.getUserRepo(input).toPromise().then((response: any) => {
        console.log(response);
      })
    }
  }
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

}
