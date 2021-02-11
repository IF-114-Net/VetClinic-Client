import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCabinetComponent } from './client-cabinet.component';

describe('ClientCabinetComponent', () => {
  let component: ClientCabinetComponent;
  let fixture: ComponentFixture<ClientCabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCabinetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
