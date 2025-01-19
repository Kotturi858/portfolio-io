import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-about',
  imports: [CdkAccordionModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  items = ['SKILLS', 'EXPERIENCE', 'EDUCATION'];
  expandedIndex = 0;
}
