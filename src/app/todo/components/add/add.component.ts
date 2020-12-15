import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { TodoService } from '../../services/todo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @Output() update = new EventEmitter();
  tareaDescripcion: string = '';
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  agregarTarea() {
    const tarea: Tarea = {
      id: this.todoService.generarId(),
      descripcion: this.tareaDescripcion,
      hecho: false,
    };
    this.todoService.agregarTarea(tarea).subscribe(
      async (res) => {
        await Swal.fire({
          title: 'Correcto',
          text: `Se agregó la tarea ${res.descripcion}`,
          icon: 'success',
        });
        this.update.emit();
        this.tareaDescripcion = '';
      },
      (err) => {
        Swal.fire({
          title: 'Ups!',
          text: 'ocurrió un error al intentar agregar la tarea',
          icon: 'error',
        });
      }
    );
  }
}
