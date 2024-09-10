import { Component } from '@angular/core';
import { Cidade } from 'src/app/modelos/Cidade';
import { Pessoa } from 'src/app/modelos/Pessoa';
import { CidadeService } from 'src/app/servicos/cidade.service';
import { PessoaService } from 'src/app/servicos/pessoa.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent {

  // Objeto pessoa
  pessoa = new Pessoa();

  // Obter o índice da cidade selecionada
  indiceCidade:number = -1;

  // Vetor de pessoas
  pessoas:Pessoa[] = [];

  // Vetor de cidades
  cidades:Cidade[] = [];

  // Construtor
  constructor(private servicoP:PessoaService, private servicoC:CidadeService){}

  // Cadastrar
  cadastrar():void{
    // Obter o nome e o código da cidade selecionada
    this.pessoa.cidade = this.cidades[this.indiceCidade];

    // Executar serviço
    this.servicoP.cadastrar(this.pessoa).subscribe(retorno => {
      // Cadastrar cidade no vetor
      this.pessoas.push(retorno);

      // Limpar formulário
      this.pessoa.nome = '';
      this.indiceCidade = -1;
    })
  }

  // Ao iniciar o componente
  ngOnInit(){
    // Obter todas as pessoas registradas
    this.servicoP.listar().subscribe(retorno => {this.pessoas = retorno});

    // Obter todas as cidades registradas
    this.servicoC.listar().subscribe(retorno => {this.cidades = retorno});
  }

}
