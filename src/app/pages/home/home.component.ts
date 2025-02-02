import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  imports: [MatTooltipModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInOnScroll', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateX(100px)',
        })
      ),
      transition(':enter', [animate('1s linear')]),
    ]),
  ],
})
export class HomeComponent {
  redirect(url: string) {
    window.open(url, '_blank');
  }
}
