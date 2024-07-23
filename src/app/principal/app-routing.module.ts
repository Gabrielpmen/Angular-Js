import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { PrincipalCidComponent } from './principalcid.component';

const routes: Routes = [
  { path: './cadastrar', component: PrincipalComponent },
  { path: './cadastrar2', component: PrincipalCidComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
