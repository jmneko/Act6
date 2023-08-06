import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './componets/form/form.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { C404Component } from './pages/c404/c404.component';

const routes: Routes = [
  {path:"",pathMatch: 'full', redirectTo: 'home'},
  {path: "home", component: HomeComponent},
  {path:"newpost", component: FormComponent},
  {path: "updatepost", component: FormComponent},
  {path: "viewpost/:idpost", component: ViewPostComponent},
  {path: "**", component: C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
