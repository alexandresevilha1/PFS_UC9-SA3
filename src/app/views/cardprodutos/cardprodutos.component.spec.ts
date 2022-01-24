import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardprodutosComponent } from './cardprodutos.component';

describe('CardprodutosComponent', () => {
  let component: CardprodutosComponent;
  let fixture: ComponentFixture<CardprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardprodutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
