import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroList } from './superhero-list';

describe('SuperheroList', () => {
  let component: SuperheroList;
  let fixture: ComponentFixture<SuperheroList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
