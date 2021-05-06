import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedaspeliculasComponent } from './page/busquedaspeliculas/busquedaspeliculas.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';
import { AngularFireModule } from '@angular/fire';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculaAltaComponent } from './page/pelicula-alta/pelicula-alta.component';
import { ActorPeliculaComponent } from './page/actor-pelicula/actor-pelicula.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './page/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    BusquedaspeliculasComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaActoresComponent,
    TablaPaisesComponent,
    PeliculaAltaComponent,
    ActorPeliculaComponent,
    TablaActorComponent,
    DetallePaisComponent,
    DetalleActorComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBk22tmWg4lhT4R9ZrA9a6qiJ1Cuy_cBzI",
        authDomain: "flatz-973e4.firebaseapp.com",
        databaseURL: "https://flatz-973e4.firebaseio.com",
        projectId: "flatz-973e4",
        storageBucket: "flatz-973e4.appspot.com",
        messagingSenderId: "153201490798",
        appId: "1:153201490798:web:1b567292190cfb627d5f7f",
        measurementId: "G-JM6N70YSQZ"
      }
    )
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
