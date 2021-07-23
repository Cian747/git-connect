import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user-service/user.service'
import { Repoview } from '../models/repoview';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos!:Repoview[];


  localRepos(input: string) {
    if(input) {
      console.log(input);
      this.services.getUserRepo(input).toPromise().then((response: any) => {
        console.log(response);
        this.repos = response;
      })
    }
  }

  constructor(private services:UserService) { }

  ngOnInit(): void {
  }

}
