import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AuthSideBarComponent } from "apps/roseApp/src/app/shared/components/auth-side-bar/authSideBar.component";
import { MarronSeperatorComponent } from "apps/roseApp/src/app/shared/components/decor-marron-seperator/marronSeperator.component";

@Component({
  selector: 'app-auth-layout',
  imports: [CommonModule, RouterModule, AuthSideBarComponent, MarronSeperatorComponent],
  templateUrl: './authLayout.component.html',
  styleUrl: './authLayout.component.scss',
})
export class AuthLayoutComponent {}
