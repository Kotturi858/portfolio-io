// src/app/animations.ts
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
  AUTO_STYLE,
  animation,
} from '@angular/animations';

export const swingAnimation = trigger('swing', [
  transition(':enter', [
    animate(
      '0.8s ease-in-out',
      keyframes([
        style({ transform: 'rotate(0deg)', offset: 0 }),
        style({ transform: 'rotate(15deg)', offset: 0.2 }),
        style({ transform: 'rotate(-10deg)', offset: 0.4 }),
        style({ transform: 'rotate(5deg)', offset: 0.6 }),
        style({ transform: 'rotate(-5deg)', offset: 0.8 }),
        style({ transform: 'rotate(0deg)', offset: 1.0 }),
      ])
    ),
  ]),
]);

export const swing = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ 'transform-origin': 'top center', offset: 0 }),
        style({
          visibility: AUTO_STYLE,
          transform: 'rotate3d(0, 0, 1, 0deg)',
          easing: 'ease',
          offset: 0,
        }),
        style({
          transform: 'rotate3d(0, 0, 1, 15deg)',
          easing: 'ease',
          offset: 0.2,
        }),
        style({
          transform: 'rotate3d(0, 0, 1, -10deg)',
          easing: 'ease',
          offset: 0.4,
        }),
        style({
          transform: 'rotate3d(0, 0, 1, 5deg)',
          easing: 'ease',
          offset: 0.6,
        }),
        style({
          transform: 'rotate3d(0, 0, 1, -5deg)',
          easing: 'ease',
          offset: 0.8,
        }),
        style({
          transform: 'rotate3d(0, 0, 1, 0deg)',
          easing: 'ease',
          offset: 1,
        }),
      ])
    ),
  ]);
