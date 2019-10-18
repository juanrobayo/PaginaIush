import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResenaHistoricaComponent } from './components/resena-historica/resena-historica.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { LineaspComponent } from './components/lineasp/lineasp.component';
import { PanelSemilleroComponent } from './components/panel-semillero/panel-semillero.component';
import { ActualidadProyectosComponent } from './components/actualidad-proyectos/actualidad-proyectos.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RequisitosFormulariosComponent } from './components/requisitos-formularios/requisitos-formularios.component';


const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'proyectos', component:ProyectosComponent},
    {path: 'integrantes', component:IntegrantesComponent},
    {path: 'resenahistorica', component:ResenaHistoricaComponent},
    {path: 'actualidad-proyectos/:pid', component:ActualidadProyectosComponent},
    {path: 'proyectos', component:ProyectosComponent},
    {path: 'panel-semillero', component:PanelSemilleroComponent,canActivate:[AuthenticationGuard]},
    {path: 'lineasp', component:LineaspComponent},
    {path: 'integrantes', component:IntegrantesComponent},
    {path: 'requisitos', component:RequisitosComponent},
    {path: 'requisitos-formularios/:id', component:RequisitosFormulariosComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
  ];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
  exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
