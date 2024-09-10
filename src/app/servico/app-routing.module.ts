import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipalCidComponent } from '';

const routes: Routes = [
  { path: './principal.component', component: PrincipalComponent },
  { path: '', component: PrincipalCidComponent },
  { path: '', redirectTo: '/client-register', pathMatch: 'full' }, // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
