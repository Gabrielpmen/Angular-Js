import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { CidadeService } from '../servico/cidade.service';
import { Cidade } from '../modelo/Cidade';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  // Objeto do tipo Cliente
  cliente = new Cliente();
  cidade = new Cidade();

  // Váriavel para visibiliade dos botões
btnCadastro:boolean = true;

// Váriavel para visibilidade da tabela
tabela:boolean = true;
tabelacid:boolean = true;

// JSON de clientes

clientes:Cliente[] = [];
cidades: any;


// Construtor

constructor(private servico:ClienteService, private servicocid:CidadeService){}
// Método de seleção

selecionar():void{
this.servico.selecionar()
.subscribe(retorno =>this.clientes = retorno);
}

// Método de cadastro
cadastrar():void{
  this.servico.cadastrar(this.cliente)

  .subscribe(retorno => {
    //Cadastrar o cliente no vetor
    this.clientes.push(retorno);
     // Limpar formulário
this.cliente = new Cliente();
// Mensagem
alert('Cliente cadastrado com sucesso!')

  })
  this.servicocid.cadastrarcid(this.cidade)
    .subscribe(retorno => {
      //Cadastrar o cidade no vetor
    this.cidades.push(retorno);
    // Limpar formulário
this.cidade = new Cidade();
// Mensagem
alert('Cidade cadastrada com sucesso!')})

};

// Método para selecionar um cliente especifico
selecionarCliente(posicao:number):void{

  // Selecionar cliente no vetor
  this.cliente = this.clientes[posicao];

  // Visibilidade dos botões
  this.btnCadastro =false;

    // Visibilidade da tabela
    this.tabela = false;

}



// Método para editar clientes
editar():void{
  this.servico.editar(this.cliente)
  .subscribe(retorno => {

// Obter posição do vetor onde está o cliente
let posicao = this.clientes.findIndex(obj =>{
  return obj.codigo== retorno.codigo;
});

// Alterar os dados do cliente no vetor
this.clientes[posicao] = retorno;

//Limpar formulário
this.cliente = new Cliente();

// Visibilidade dos botões
this.btnCadastro = true;

// Visibilidade da tabela
this.tabela = true;

// Mensagem
alert('Cliente alterado com sucesso');

  });
}


// Método para remover clientes
remover():void{
  this.servico.remover(this.cliente.codigo)
  .subscribe(retorno => {

// Obter posição do vetor onde está o cliente
let posicao = this.clientes.findIndex(obj =>{
  return obj.codigo== this.cliente.codigo;
});

// Remover cliente no vetor
this.clientes.splice(posicao, 1);

//Limpar formulário
this.cliente = new Cliente();

// Visibilidade dos botões
this.btnCadastro = true;

// Visibilidade da tabela
this.tabela = true;

// Mensagem
alert('Cliente removido com sucesso');

  });
}

// Método para cancelar
cancelar():void{

// Limpar formulário
this.cliente = new Cliente();

// Visibilidade dos botões
this.btnCadastro = true;

// Visibilidade da tabela
this.tabela = true;


}

// Método de inicialização
ngOnInit(){
  this.selecionar();
}
}
