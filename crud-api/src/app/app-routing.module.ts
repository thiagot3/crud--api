import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { DeletarAtendimentoComponent } from './atendimento/deletar-atendimento/deletar-atendimento.component';
import { ListarAtendimentoComponent } from './atendimento/listar-atendimento/listar-atendimento.component';
import { NovoAtendimentoComponent } from './atendimento/novo-atendimento/novo-atendimento.component';

const routes: Routes = [
{ path: '', component: AtendimentoComponent },
{ path: 'novo', component: NovoAtendimentoComponent },
{ path: 'deletar', component: DeletarAtendimentoComponent },
{ path: 'listar', component: ListarAtendimentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
