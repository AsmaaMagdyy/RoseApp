import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthRouterLinkComponent } from './authRouterLink.component';

describe('AuthRouterLinkComponent', () => {
  let component: AuthRouterLinkComponent;
  let fixture: ComponentFixture<AuthRouterLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRouterLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthRouterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
