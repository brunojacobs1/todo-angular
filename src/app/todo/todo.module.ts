import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './components/add/add.component';
import { ListaPageComponent } from './pages/lista-page/lista-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaComponent } from './components/lista/lista.component';
import { MatListModule } from '@angular/material/list';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AddComponent,
    ListaPageComponent,
    ListaComponent,
    EditarPageComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    MatCheckboxModule,
  ],
  exports: [AddComponent, ListaPageComponent],
  providers: [TodoService],
})
export class TodoModule {}
