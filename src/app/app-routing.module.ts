import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'home2',component:Home2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
