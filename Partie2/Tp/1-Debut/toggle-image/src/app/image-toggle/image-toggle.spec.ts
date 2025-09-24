import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToggle } from './image-toggle';

describe('ImageToggle', () => {
  let component: ImageToggle;
  let fixture: ComponentFixture<ImageToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageToggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
