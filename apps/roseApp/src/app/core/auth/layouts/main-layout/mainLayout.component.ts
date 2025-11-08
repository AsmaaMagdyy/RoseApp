import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './mainLayout.component.html',
  styleUrl: './mainLayout.component.scss',
})
export class MainLayoutComponent {}
