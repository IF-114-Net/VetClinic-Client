import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessDialogComponent } from './assess-dialog.component';

describe('AssessDialogComponent', () => {
  let component: AssessDialogComponent;
  let fixture: ComponentFixture<AssessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
