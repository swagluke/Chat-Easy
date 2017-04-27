import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './+signin/signin.component';
import { MainComponent } from './+main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: 'signin', component: SigninComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
