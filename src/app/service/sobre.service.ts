import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sobre } from '../model/sobre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  constructor(private http: HttpClient) { }

  // GET
  listar(): Observable<Sobre[]>{
    return this.http.get<Sobre[]>('http://localhost:3000/sobre')
  }

  // POST
  inserir(Sobre: Sobre): Observable<Sobre>{
    return this.http.post<Sobre>('http://localhost:3000/sobre', Sobre);
  }

  // PUT
  atualizar(sobre: Sobre): Observable<Sobre>{
    return this.http.put<Sobre>(`http://localhost:3000/sobre/${sobre.id}`, sobre);
  }

  // DELETE
  excluir(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/sobre/${id}`);

  }
}
