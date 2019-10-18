import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { LineaspComponent } from './components/lineasp/lineasp.component';
import { PanelSemilleroComponent } from './components/panel-semillero/panel-semillero.component';
import { ResenaHistoricaComponent } from './components/resena-historica/resena-historica.component';
import { ActualidadProyectosComponent } from './components/actualidad-proyectos/actualidad-proyectos.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RequisitosFormulariosComponent } from './components/requisitos-formularios/requisitos-formularios.component';




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
    RequisitosComponent,
    RequisitosFormulariosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule ,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
