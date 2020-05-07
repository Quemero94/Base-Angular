import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './componentes/peliculas-listado/peliculas-listado.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';



const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'Busqueda', component: BusquedaComponent },

  {
    path: 'Peliculas',
    children: [
      { path: 'lista', component: PeliculasListadoComponent },
      { path: 'alta', component: PeliculaAltaComponent }
    ]
  },
  {
    path: 'Actor',
    children: [
      { path: 'lista', component: ActorListadoComponent },
      { path: 'alta', component: ActorAltaComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
