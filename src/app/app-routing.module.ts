import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LineasPComponent } from './components/lineas-p/lineas-p.component';
import { ResenaHistoricaComponent } from './components/resena-historica/resena-historica.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'login', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'proyectos', component:ProyectosComponent},
{path:'home',component:HomeComponent},
{path:'resenahistorica',component:ResenaHistoricaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
