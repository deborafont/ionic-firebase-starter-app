import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' },
  { path: 'tab', loadChildren: './tab/tab.module#TabPageModule' },
  { path: 'complete', loadChildren: './complete/complete.module#CompletePageModule' },
  { path: 'header', loadChildren: './header/header.module#HeaderPageModule' },
  { path: 'pop-up', loadChildren: './pop-up/pop-up.module#PopUpPageModule' },
  { path: 'saved', loadChildren: './saved/saved.module#SavedPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
