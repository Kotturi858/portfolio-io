import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Bharath_Kotturi.pdf';
    link.download = 'Bharath_Kotturi.pdf';
    link.click();
  }
}
