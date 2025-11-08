import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-router-link',
  imports: [CommonModule,RouterLink],
  templateUrl: './authRouterLink.component.html',
  styleUrl: './authRouterLink.component.scss',
})
export class AuthRouterLinkComponent {
  page = input.required<string>();
}
