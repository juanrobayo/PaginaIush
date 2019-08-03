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
<<<<<<< HEAD
import { PanelSemilleroComponent } from './components/panel-semillero/panel-semillero.component';
import { AuthenticationGuard } from './services/authentication.guard';
=======
import { LineaspComponent } from './components/lineasp/lineasp.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
>>>>>>> 2f90a0ce66f2a0c9d7d92b795754f380ee01421c


const appRoutes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'proyectos', component:ProyectosComponent},
<<<<<<< HEAD
  {path: 'panel-semillero', component:PanelSemilleroComponent,canActivate:[AuthenticationGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  
=======
  {path: 'Lineas-Profundizacion', component:LineaspComponent},
  {path: 'Integrantes', component:IntegrantesComponent}
>>>>>>> 2f90a0ce66f2a0c9d7d92b795754f380ee01421c
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProyectosComponent,
    LoginComponent,
<<<<<<< HEAD
    PanelSemilleroComponent
=======
    LineaspComponent,
    IntegrantesComponent
>>>>>>> 2f90a0ce66f2a0c9d7d92b795754f380ee01421c
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
