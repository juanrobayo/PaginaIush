import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
=======
import { Routes, RouterModule } from '@angular/router';
>>>>>>> abf55698c95e6130a060b3189387fbe191fd337f
import { HomeComponent } from './components/home/home.component';
import { LineasPComponent } from './components/lineas-p/lineas-p.component';
import { ResenaHistoricaComponent } from './components/resena-historica/resena-historica.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

<<<<<<< HEAD
const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'login', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'proyectos', component:ProyectosComponent},
{path:'home',component:HomeComponent},
{path:'resenahistorica',component:ResenaHistoricaComponent},
=======
// const routes: Routes = [

// {path:'',component:HomeComponent},
// {path:'home',component:HomeComponent}
>>>>>>> abf55698c95e6130a060b3189387fbe191fd337f

// ];

<<<<<<< HEAD
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
=======
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
>>>>>>> abf55698c95e6130a060b3189387fbe191fd337f
export class AppRoutingModule { }
