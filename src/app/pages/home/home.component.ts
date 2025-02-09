import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  imports: [MatTooltipModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  redirect(url: string) {
    window.open(url, '_blank');
  }
}
