import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable  } from 'rxjs';
import { Cliente } from '../modelo/Cliente';
import { Cidade } from '../modelo/Cidade';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 // URL da API

 private url:string = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  // Método para selecionar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

   // Método para selecionar todos os clientes
   selecionar2():Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.url);
  }


  // Método para cadastrar clientes

  cadastrar(obj:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url,obj);
  }

// Método para editar clientes
  editar(obj:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url,obj);
  }

  //Método para remover clientes
  remover(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + codigo);
  }
}
