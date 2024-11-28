import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsertabsComponent } from './browsertabs.component';

describe('BrowsertabsComponent', () => {
  let component: BrowsertabsComponent;
  let fixture: ComponentFixture<BrowsertabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowsertabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsertabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
