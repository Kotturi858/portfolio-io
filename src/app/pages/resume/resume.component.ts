import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  downloadResume() {
    window.open('assets/Bharath_Kotturi.pdf', '_blank')
  }
}
