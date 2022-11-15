import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCndvComponent } from './create-cndv.component';

describe('CreateCndvComponent', () => {
  let component: CreateCndvComponent;
  let fixture: ComponentFixture<CreateCndvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCndvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCndvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
