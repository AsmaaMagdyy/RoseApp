import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarronSeperatorComponent } from './marronSeperator.component';

describe('MarronSeperatorComponent', () => {
  let component: MarronSeperatorComponent;
  let fixture: ComponentFixture<MarronSeperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarronSeperatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarronSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
