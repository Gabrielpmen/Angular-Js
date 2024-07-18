import { Cidade } from './../modelo/Cidade';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable  } from 'rxjs';
import { Cliente } from '../modelo/Cliente';




@Injectable({
  providedIn: 'root'
})
export class CidadeService {
 // URL da API

 private url:string = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  // Método para selecionar todos as Cidades
  selecionar():Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.url);
  }



  // Método para cadastrar cidade

  cadastrar(obj:Cidade):Observable<Cidade>{
    return this.http.post<Cidade>(this.url,obj);
  }

// Método para editar cidade
  editar(obj:Cidade):Observable<Cidade>{
    return this.http.put<Cidade>(this.url,obj);
  }

  //Método para remover cidade
  remover(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + codigo);
  }
}
