import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Routes
import { HomeComponent } from './components/home/home.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'objetivos', component: ObjetivosComponent },
  { path: 'preguntas-frecuntes', component: PreguntasFrecuentesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
