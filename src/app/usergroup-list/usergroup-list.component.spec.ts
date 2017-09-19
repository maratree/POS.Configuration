import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupListComponent } from './usergroup-list.component';

describe('UsergroupListComponent', () => {
  let component: UsergroupListComponent;
  let fixture: ComponentFixture<UsergroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
