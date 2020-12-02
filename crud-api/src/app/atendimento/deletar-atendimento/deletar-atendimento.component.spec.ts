import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarAtendimentoComponent } from './deletar-atendimento.component';

describe('DeletarAtendimentoComponent', () => {
  let component: DeletarAtendimentoComponent;
  let fixture: ComponentFixture<DeletarAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
