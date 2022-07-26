import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootdashComponent } from './rootdash.component';

describe('RootdashComponent', () => {
  let component: RootdashComponent;
  let fixture: ComponentFixture<RootdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
