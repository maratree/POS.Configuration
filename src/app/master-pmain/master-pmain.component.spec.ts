import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPmainComponent } from './master-pmain.component';

describe('MasterPmainComponent', () => {
  let component: MasterPmainComponent;
  let fixture: ComponentFixture<MasterPmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
