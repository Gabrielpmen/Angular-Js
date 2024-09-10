import { Injectable } from '@angular/core';
import { Pessoa } from '../modelos/Pessoa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  // URL da API
  private url = 'http://localhost:8080/pessoa';

  // Consturtor
  constructor(private http:HttpClient) {}

  // Cadastrar
  cadastrar(pessoa:Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.url, pessoa);
  }

  // Listar
  listar():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url);
  }

}
