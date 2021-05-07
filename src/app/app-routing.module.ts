import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedaspeliculasComponent } from './page/busquedaspeliculas/busquedaspeliculas.component';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';
import { PeliculaAltaComponent } from './page/pelicula-alta/pelicula-alta.component';
import { ActorPeliculaComponent } from './page/actor-pelicula/actor-pelicula.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { SesionGuard } from './guards/sesion.guard';
import { AbmPizzaComponent } from './componentes/abm-pizza/abm-pizza.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path:"login"
  },
  {
    component: RegistroComponent,
    path: "registro"
  },
  {
    component: InicioComponent,
    path: "",
    canActivate:[
      SesionGuard
    ],
    children:[
      {
        path: 'bienvenido',
        component: BienvenidosComponent,
      },
      {
        path: 'busqueda',
        component: BusquedaspeliculasComponent
      },
      {
        path: 'AltaActores',
        component: AltaActoresComponent
      },
      {
        path:'PeliculaAlta',
        component:PeliculaAltaComponent
      },
      {
        path:'ActorPelicula',
        component:ActorPeliculaComponent
      },
      {
        path:'AbmPizza',
        component:AbmPizzaComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bienvenido'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
