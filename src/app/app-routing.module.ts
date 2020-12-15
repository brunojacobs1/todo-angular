import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarPageComponent } from './todo/pages/editar-page/editar-page.component';
import { ListaPageComponent } from './todo/pages/lista-page/lista-page.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ListaPageComponent,
  },
  {
    path: 'editar/:id',
    component: EditarPageComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'lista',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
