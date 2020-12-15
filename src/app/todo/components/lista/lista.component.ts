import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit, DoCheck {
  @Input() tareas!: Tarea[];
  @Output() eliminarTarea = new EventEmitter();
  tareasTerminadas = 0;
  @Output() actualizarTarea = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.tareasTerminadas = this.tareas?.filter((t) => t.hecho).length;
  }

  eliminar(tareaId: number) {
    console.log(tareaId);
    Swal.fire({
      icon: 'warning',
      title: `Eliminar tarea ${tareaId}?`,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
      showCancelButton: true,
    }).then((value) => {
      if (value.isConfirmed) {
        this.eliminarTarea.emit(tareaId);
      }
    });
  }

  seleccionar(tarea: Tarea) {
    this.tareas.forEach((t) => {
      if (t.id === tarea.id) {
        t.hecho = !t.hecho;
        this.actualizarTarea.emit(t);
      }
    });
    console.log(this.tareas);
  }
}
