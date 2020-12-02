import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { NovoAtendimentoComponent } from './atendimento/novo-atendimento/novo-atendimento.component';
import { ListarAtendimentoComponent } from './atendimento/listar-atendimento/listar-atendimento.component';
import { DeletarAtendimentoComponent } from './atendimento/deletar-atendimento/deletar-atendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentoComponent,
    NovoAtendimentoComponent,
    ListarAtendimentoComponent,
    DeletarAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
