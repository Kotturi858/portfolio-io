import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Bharath_Kotturi.pdf';
    link.download = 'Bharath_Kotturi.pdf';
    link.click();
  }
}
