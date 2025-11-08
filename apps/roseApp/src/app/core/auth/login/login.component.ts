import { Component, inject, OnDestroy } from '@angular/core';
import { AuthRouterLinkComponent } from "../../../shared/components/auth-router-link/authRouterLink.component";
import { AuthTitleComponent } from "../../../shared/components/auth-title/authTitle.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@rose-app/auth';
import { Subscription } from 'rxjs';
import { PASSWORD_PATTERN } from '../../../shared/constants/regex-patterns';
import { LoggingService } from '../../services/logging-service/logging.service';

@Component({
  selector: 'app-login',
  imports: [AuthRouterLinkComponent, AuthTitleComponent],
  
templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy{

  private readonly _formBuilder = inject(FormBuilder);
  private readonly _router = inject(Router);
  private readonly _authService = inject(AuthService);
  private readonly _loggingService = inject(LoggingService);
  // private readonly toastr = inject(ToastrService);
  loginSub!: Subscription;
  typePass: boolean = false;

  loginForm: FormGroup = this._formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
  })
  submit(): void {
    if (this.loginForm.valid) {
      this._loggingService.logData("valid");
      this.loginSub = this._authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          this._loggingService.logData(res);
          if (res.message == 'success') {
            localStorage.setItem('flowersEcommerceToken', res.token);
            // this.toastr.success('Success  and navigate to home in 2 seconds ');
            setTimeout(() => {
              this._router.navigate(['/home']);
            }, 2000);
          }
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  showPassword(): void {
    this.typePass = !this.typePass;
  }
  onSignInClick() {
    this._loggingService.logData('Button clicked!')
    this.submit();
  }
  ngOnDestroy(): void {
    this.loginSub?.unsubscribe();
  }

}
