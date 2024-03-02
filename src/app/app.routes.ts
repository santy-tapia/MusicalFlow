import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ArtistaComponent } from './modules/artista/artista.component';
import { BusquedaComponent } from './modules/busqueda/busqueda.component';
import { FormularioBusquedaComponent } from './modules/formulario-busqueda/formulario-busqueda.component';
import { AlbumComponent } from './modules/album/album.component';
import { PipesComponent } from './pipes/pipes.component';
import { RecentComponent } from './modules/recent/recent.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artista', component: ArtistaComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'recent', component: RecentComponent},
  { path: 'artista/:id', component: ArtistaComponent },
  { path: 'album/:id', component: AlbumComponent},
  { path: 'forms', component:FormularioBusquedaComponent},
  { path: 'pipes', component:PipesComponent},
  { path: '**', redirectTo: 'home' },
];
