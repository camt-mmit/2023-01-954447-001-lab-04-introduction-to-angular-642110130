import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  title = 'Status';
  currentTime = new Date().toLocaleTimeString();
  userAgent = window.navigator.userAgent;
  languages = window.navigator.languages;
  CookieEnagled = window.navigator.cookieEnabled;
  LogicalProcessor = window.navigator.hardwareConcurrency;
  MaxTouchPoints = window.navigator.maxTouchPoints;
}
