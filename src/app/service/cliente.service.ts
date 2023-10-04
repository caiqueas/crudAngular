import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  // GET
  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/cliente')
  }

  // POST
  inserir(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:3000/cliente', cliente);
  }

  // PUT
  atualizar(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`http://localhost:3000/cliente/${cliente.id}`, cliente);
  }

  // DELETE
  excluir(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/cliente/${id}`);

  }
}
