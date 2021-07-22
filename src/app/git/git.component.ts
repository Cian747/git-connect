import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  searchResults(input: string){
  
  }

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

}
