import { Route } from '@angular/router';
import { loggedGuard } from './core/guards/logged/logged.guard';
import { authGuard } from './core/guards/auth/auth.guard';


export const appRoutes: Route[] = [
    {
        path: "", loadComponent: () => import('./core/auth/layouts/auth-layout/authLayout.component').then(m => m.AuthLayoutComponent),canActivate:[loggedGuard], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', loadComponent: () => import('./core/auth/login/login.component').then(m => m.LoginComponent) },
            { path: 'register', loadComponent: () => import('./core/auth//register/register.component').then(m => m.RegisterComponent) },
            { path: 'forgetPassword', loadComponent: () => import('./features/pages/forget-password/forgetPassword.component').then(m => m.ForgetPasswordComponent) },
        ]
    },
    {
        path: "", loadComponent: () => import('./core/auth/layouts/main-layout/mainLayout.component').then(m => m.MainLayoutComponent),canActivate:[authGuard], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('./features/pages/home/home.component').then(m => m.HomeComponent) },
            

        ]
    },
    { path: '**', loadComponent: () => import('./features/pages/not-found/notfound.component').then(m => m.NotfoundComponent) }
 
];
