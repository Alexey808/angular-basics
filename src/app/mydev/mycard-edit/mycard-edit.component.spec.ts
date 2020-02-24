import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycardEditComponent } from './mycard-edit.component';

describe('MycardEditComponent', () => {
  let component: MycardEditComponent;
  let fixture: ComponentFixture<MycardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
