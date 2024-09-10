import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PessoaComponent } from 'src/pessoa/pessoa.component';
import { CidadeComponent } from 'src/cidade/cidade.component';
import { TopoComponent } from './topo/topo.component';
=======
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';
>>>>>>> d5a7ca049941ea67bc6e7475cc290a3f8a4af508

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PessoaComponent,
    CidadeComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
=======
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
>>>>>>> d5a7ca049941ea67bc6e7475cc290a3f8a4af508
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
