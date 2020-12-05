import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceAtendimentoService } from 'src/app/service-atendimento.service';
import { Atendimento } from 'src/app/service-atendimento';

@Component({
  selector: 'app-novo-atendimento',
  templateUrl: './novo-atendimento.component.html',
  styleUrls: ['./novo-atendimento.component.css']
})
export class NovoAtendimentoComponent implements OnInit {

  atendimento = {} as Atendimento;
  atendimentos: Atendimento[];

  constructor(private atendimentoService: ServiceAtendimentoService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    if (this.atendimento.id !== undefined){
      this.atendimentoService.updateAtendimento(this.atendimento).subscribe(() => {
        this.cleanForm(form);
    });
  }


    else {this.atendimentoService.saveAtendimento(this.atendimento).subscribe(() => {
      this.cleanForm(form);
    });
  }
}

  // tslint:disable-next-line:typedef
  cleanForm(form: NgForm) {
    form.resetForm();
    this.atendimento = {} as Atendimento ;
    }
}
