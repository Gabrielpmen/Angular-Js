import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { Cidade } from '../modelo/Cidade';
import { CidadeService } from '../servico/cidade.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalCidComponent {
  // Objeto do tipo Cidade
  cidade = new Cidade();

  // Váriavel para visibiliade dos botões
btnCadastro:boolean = true;

// Váriavel para visibilidade da tabela
tabela:boolean = true;

// JSON de cidade

cidades:Cidade[] = [];
// Construtor

constructor(private servico:CidadeService){}
// Método de seleção

selecionar2():void{
this.servico.selecionar()
.subscribe(retorno =>this.cidades = retorno);
}

// Método de cadastro
cadastrar2():void{
  this.servico.cadastrar(this.cidade)
  .subscribe(retorno => {
    //Cadastrar o cliente no vetor
    this.cidades.push(retorno);

// Limpar formulário
this.cidade = new Cliente();
// Mensagem
alert('Cidade cadastrada com sucesso!')

  });
}
// Método para selecionar uma cidade especifica
selecionarCidade(posicao:number):void{

  // Selecionar cidade no vetor
  this.cidade = this.cidades[posicao];

  // Visibilidade dos botões
  this.btnCadastro =false;

    // Visibilidade da tabela
    this.tabela = false;

}

// Método para editar cidades
editar2():void{
  this.servico.editar(this.cidade)
  .subscribe(retorno => {

// Obter posição do vetor onde está a cidade
let posicao = this.cidades.findIndex(obj =>{
  return obj.codigo== retorno.codigo;
});

// Alterar os dados da cidade no vetor
this.cidades[posicao] = retorno;

//Limpar formulário
this.cidade = new Cliente();

// Visibilidade dos botões
this.btnCadastro = true;

// Visibilidade da tabela
this.tabela = true;

// Mensagem
alert('Cidade alterada com sucesso');

  });
}


// Método para remover cidade
remover2():void{
  this.servico.remover(this.cidade.codigo)
  .subscribe(retorno => {

// Obter posição do vetor onde está a cidade
let posicao = this.cidades.findIndex(obj =>{
  return obj.codigo== this.cidade.codigo;
});

// Remover cliente no vetor
this.cidades.splice(posicao, 1);

//Limpar formulário
this.cidade = new Cidade();

// Visibilidade dos botões
this.btnCadastro = true;

// Visibilidade da tabela
this.tabela = true;

// Mensagem
alert('Cidade removida com sucesso');

  });
}

// Método para cancelar
cancelar2():void{

// Limpar formulário
this.cidade = new Cidade();

// Visibilidade dos botões
this.btnCadastro = true;

// Visibilidade da tabela
this.tabela = true;


}

// Método de inicialização
ngOnInit(){
  this.selecionar2();
}
}
