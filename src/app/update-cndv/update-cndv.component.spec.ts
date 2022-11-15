import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCndvComponent } from './update-cndv.component';

describe('UpdateCndvComponent', () => {
  let component: UpdateCndvComponent;
  let fixture: ComponentFixture<UpdateCndvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCndvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCndvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
