import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CndvListComponent } from './cndv-list.component';

describe('CndvListComponent', () => {
  let component: CndvListComponent;
  let fixture: ComponentFixture<CndvListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CndvListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CndvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
