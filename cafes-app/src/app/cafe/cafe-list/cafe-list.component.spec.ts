/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ],
      providers: [ CafeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    const cafes: Cafe[] = [
      new Cafe(
        faker.number.int(),
        faker.lorem.words(2),
        'Café de Origen',
        faker.location.city(),
        faker.lorem.word(),
        faker.number.int({ min: 1000, max: 2000 }),
        faker.image.url()
      ),
      new Cafe(
        faker.number.int(),
        faker.lorem.words(2),
        'Blend',
        faker.location.city(),
        faker.lorem.word(),
        faker.number.int({ min: 1000, max: 2000 }),
        faker.image.url()
      ),
      new Cafe(
        faker.number.int(),
        faker.lorem.words(2),
        'Café de Origen',
        faker.location.city(),
        faker.lorem.word(),
        faker.number.int({ min: 1000, max: 2000 }),
        faker.image.url()
      )
    ];

    component.cafes = cafes;
    component.getCafeOrigen();
    component.getCafeBlend();

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 <tr> elements in tbody', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });

  it('should show total for Café de Origen as 5', () => {
    const p = debug.query(By.css('p:nth-of-type(1)')).nativeElement;
    expect(p.textContent).toContain('Total Café de origen: 2');
  });

  it('should show total for Café Blend as 4', () => {
    const p = debug.query(By.css('p:nth-of-type(2)')).nativeElement;
    expect(p.textContent).toContain('Total Café Blend: 1');
  });
});
