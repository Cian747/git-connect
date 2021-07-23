import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './git/git.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  {path: 'git', component:GitComponent},
  {path: 'repo', component:RepoComponent},
  {path: '', redirectTo:"git", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
