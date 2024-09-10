import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '../modelos/Cidade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  // URL da API
  private url = 'http://localhost:8080/cidade';

  // Consturtor
  constructor(private http:HttpClient) {}

  // Cadastrar
  cadastrar(cidade:Cidade):Observable<Cidade>{
    return this.http.post<Cidade>(this.url, cidade);
  }

  // Listar
  listar():Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.url);
  }

}
