import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncursoComponent } from './encurso.component';

describe('EncursoComponent', () => {
  let component: EncursoComponent;
  let fixture: ComponentFixture<EncursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
