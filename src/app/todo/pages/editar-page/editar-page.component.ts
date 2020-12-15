import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { TodoService } from '../../services/todo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-page',
  templateUrl: './editar-page.component.html',
  styleUrls: ['./editar-page.component.css'],
})
export class EditarPageComponent implements OnInit, DoCheck {
  tarea$ = new Observable<Tarea>();
  tarea!: Tarea;
  hecho!: boolean;
  descripcionACambiar!: string;
  tareaDescripcion: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(+params['id'].toString());
      this.tarea$ = this.todoService.obtenerTarea(+params['id'].toString());
      this.tarea$.subscribe((tarea) => {
        this.tarea = tarea;
        console.log(this.tarea);
      });
    });
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.descripcionACambiar = this.tarea?.descripcion;
    this.hecho = this.tarea?.hecho;
  }

  checkHecho() {
    this.tarea.hecho = !this.tarea.hecho;
    console.log(this.tarea.hecho);
  }

  isValid() {
    return this.tareaDescripcion != '';
  }

  actualizarTarea(tarea: Tarea) {
    if (this.isValid()) {
      this.todoService
        .actualizarTarea({ ...tarea, descripcion: this.tareaDescripcion })
        .subscribe((res) => {
          console.log('Se actualizó la tarea');
          Swal.fire({
            title: 'Bien!',
            text: 'Se actualizó correctamente la tarea',
            icon: 'success',
          }).then(() => this.router.navigateByUrl('/lista'));
        });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un nombre para la tarea',
        icon: 'error',
      });
    }
  }
}
