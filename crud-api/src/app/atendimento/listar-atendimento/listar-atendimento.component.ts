import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/service-atendimento';
import { ServiceAtendimentoService } from 'src/app/service-atendimento.service';
import { AtendimentoComponent } from '../atendimento.component';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrls: ['./listar-atendimento.component.css']
})
export class ListarAtendimentoComponent implements OnInit {


  atendimentos: Atendimento[];

  constructor(private AtendimentoService: ServiceAtendimentoService) {}

  ngOnInit(): void {
    this.getAtendimento();
  }

  // tslint:disable-next-line:typedef
  getAtendimento() {
    this.AtendimentoService.getAtendimento().subscribe((atendimentos: Atendimento[]) => {
      this.atendimentos = atendimentos;
    });
  }
  }

