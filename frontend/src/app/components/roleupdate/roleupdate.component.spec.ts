import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleupdateComponent } from './roleupdate.component';

describe('RoleupdateComponent', () => {
  let component: RoleupdateComponent;
  let fixture: ComponentFixture<RoleupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
