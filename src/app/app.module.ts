import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

import { ResenaHistoricaComponent } from './components/resena-historica/resena-historica.component';
import { ActualidadProyectosComponent } from './components/actualidad-proyectos/actualidad-proyectos.component';

import { LineaspComponent } from './components/lineasp/lineasp.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';


import { PanelSemilleroComponent } from './components/panel-semillero/panel-semillero.component';
import { AuthenticationGuard } from './services/authentication.guard';


const appRoutes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'resenahistorica', component:ResenaHistoricaComponent},
  {path: 'actualidad-proyectos', component:ActualidadProyectosComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'panel-semillero', component:PanelSemilleroComponent,canActivate:[AuthenticationGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  {path: 'Lineas-Profundizacion', component:LineaspComponent},
  {path: 'Integrantes', component:IntegrantesComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProyectosComponent,
    LoginComponent,
    ResenaHistoricaComponent,
    ActualidadProyectosComponent,
    PanelSemilleroComponent,
    LineaspComponent,
    IntegrantesComponent,
    PanelSemilleroComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule ,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
