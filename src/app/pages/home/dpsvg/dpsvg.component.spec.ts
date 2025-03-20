import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpsvgComponent } from './dpsvg.component';

describe('DpsvgComponent', () => {
  let component: DpsvgComponent;
  let fixture: ComponentFixture<DpsvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpsvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
