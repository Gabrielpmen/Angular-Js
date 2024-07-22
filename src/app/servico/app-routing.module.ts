import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteService } from './cliente.service';
import { CidadeService } from './cidade.service';

const routes: Routes = [
  { path: './cadastrar2', component: CidadeService },
  { path: './cadastrar', component: ClienteService },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
