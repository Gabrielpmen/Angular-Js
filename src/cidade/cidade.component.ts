import { Component } from '@angular/core';
import { Cidade } from 'src/app/modelos/Cidade';
import { CidadeService } from 'src/app/servicos/cidade.service';


@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrl: './cidade.component.css'
})
export class CidadeComponent {

  // Objeto cidade
  cidade = new Cidade();

  // Vetor de cidades
  cidades:Cidade[] = [];

  // Construtor
  constructor(private servico:CidadeService){}

  // Cadastrar
  cadastrar():void{
    this.servico.cadastrar(this.cidade).subscribe(retorno => {
      // Cadastrar cidade no vetor
      this.cidades.push(retorno);

      // Remover o valor nome da cidade, assim o input ficará vazio
      this.cidade.nome = '';
    })
  }

  // Ao iniciar o componente
  ngOnInit(){
    this.servico.listar().subscribe(retorno => {this.cidades = retorno});
  }
}
