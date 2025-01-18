import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navButtons = [
    { label: 'HOME', icon: 'home' },
    { label: 'THEME', icon: 'person' },
    { label: 'PROJECTS', icon: 'tactic' },
    { label: 'CONTACT ME', icon: 'contact_mail' },
    { label: 'RESUME', icon: 'description' },
    { label: 'ROUTINE', icon: 'routine' },
  ];
}
