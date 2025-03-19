import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { flipOnEnterAnimation, slideInLeftOnEnterAnimation, swingOnEnterAnimation } from 'angular-animations';
import { DpsvgComponent } from './dpsvg/dpsvg.component';
@Component({
  selector: 'app-home',
  imports: [MatTooltipModule, MatCardModule, DpsvgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [swingOnEnterAnimation(), flipOnEnterAnimation(), slideInLeftOnEnterAnimation()],
})
export class HomeComponent{
  descText: string = `Creative web developer crafting responsive, user-friendly websites.
        Let's bring your ideas to life with clean, modern design...`;

  redirect(url: string) {
    window.open(url, '_blank');
  }
}
