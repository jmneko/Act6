import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './componets/form/form.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { C404Component } from './pages/c404/c404.component';

const routes: Routes = [
  {path:"",pathMatch: 'full', redirectTo: 'home'},
  {path: "home", component: HomeComponent},
  {path:"newuser", component: FormComponent},
  {path: "updateuser/:_iduser", component: FormComponent},
  {path: "viewuser/:_iduser", component: ViewUserComponent},
  {path: "**", component: C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
