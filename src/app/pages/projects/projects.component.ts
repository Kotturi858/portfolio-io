import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  imports: [MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'portfolio',
      displayPic: 'portfolio-hommie.png',
      redirectionUrl: 'https://kotturi.netlify.app/',
      description:
        'This site helps create a closer connection between us while also offering me access to a wider range of opportunities. It fosters stronger interactions and provides the platform for both personal and professional growth through new possibilities.',
    },
    {
      name: 'quizzie',
      displayPic: 'construction-crane-svgrepo-com.svg',
      redirectionUrl: '',
      description:
        'This site allows you to participate in quizzes across various programming languages, enabling you to test your skills and compete against other players. It provides a platform for learning, growth, and friendly competition in programming challenges.',
    },
    {
      name: 'code-to-docx',
      displayPic: 'construction-crane-svgrepo-com.svg',
      redirectionUrl: '',
      description:
        'This site allows you to convert code into a well-formatted Word document (.docx), complete with proper indentation and styling, so you can easily add it to your document without needing any additional formatting or adjustments.',
    },
  ];

  consolei(name: string) {
    const project = this.projects.find((project) => project.name === name)!;
    if (project.redirectionUrl !== '')
      window.open(project.redirectionUrl, '_blank');
    else {
      const originalDp = project.displayPic;
      project.displayPic = '404.svg';

      setTimeout(() => {
        project.displayPic = originalDp;
        console.log('Reverted object:', project);
      }, 3000);
    }
  }
}
