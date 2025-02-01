import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    { name: 'portfolio' },
    { name: 'quizzie' },
    { name: 'code-to-docx' },
  ];
}
