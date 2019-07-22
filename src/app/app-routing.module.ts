import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LineasPComponent } from './components/lineas-p/lineas-p.component';



const routes: Routes = [

{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
