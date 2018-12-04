import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPosteComponent } from './detail-poste.component';

describe('DetailPosteComponent', () => {
  let component: DetailPosteComponent;
  let fixture: ComponentFixture<DetailPosteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPosteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
