import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {
  tareas: Tarea[] = [];
  constructor(private httpClient: HttpClient) {
    console.log('servicio todo iniciado');
  }

  agregarTarea(tarea: Tarea) {
    const url = environment.apiUrl + environment.endpoints.tareas;
    return this.httpClient.post<Tarea>(url, tarea);
  }

  obtenerTarea(tareaId: number) {
    const url = `${environment.apiUrl}${environment.endpoints.tareas}/${tareaId}`;
    return this.httpClient.get<Tarea>(url);
  }

  obtenerTareas() {
    const url = environment.apiUrl + environment.endpoints.tareas;
    return this.httpClient.get<Tarea[]>(url);
  }

  generarId() {
    return parseInt((Math.random() * 10000000000).toString());
  }

  actualizarTarea(tarea: Tarea) {
    const url = `${environment.apiUrl}${environment.endpoints.tareas}/${tarea.id}`;
    return this.httpClient.put(url, tarea);
  }

  eliminarTarea(tareaId: number) {
    const url = `${environment.apiUrl}${environment.endpoints.tareas}/${tareaId}`;
    return this.httpClient.delete(url);
  }
}
