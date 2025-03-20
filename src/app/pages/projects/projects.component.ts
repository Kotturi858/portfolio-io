import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'portfolio',
      displayPic: 'portfolio-hommie.jpeg',
      redirectionUrl: 'https://kotturi.netlify.app/',
      description:
        'This site helps create a closer connection between us while also offering me access to a wider range of opportunities. It fosters stronger interactions and provides the platform for both personal and professional growth through new possibilities.',
      tags: [
        'Angular',
        'Bootstrap',
        'NGXUI library',
        'material',
        'angular animations',
      ],
    },
    {
      name: 'quizzie',
      displayPic: 'construction-crane-svgrepo-com.svg',
      redirectionUrl: '',
      description:
        'This site allows you to participate in quizzes across various programming languages, enabling you to test your skills and compete against other players. It provides a platform for learning, growth, and friendly competition in programming challenges.',
      tags: ['Angular', 'PrimeNG', 'rxjs', 'Spring Boot', 'PostgreSQL'],
    },
    {
      name: 'Kallos Galleria',
      displayPic: 'construction-crane-svgrepo-com.svg',
      redirectionUrl: 'https://chitra-kala.vercel.app/',
      description: 'A modern gallery app for uploading, organizing, and displaying high-quality images with smooth scrolling, lazy loading, and a seamless user experience.',
      tags: ['Angular', 'Node.js', 'AWS - S3', 'NgOptimisedImage'],
    },
  ];

  redirectTo(name: string) {
    const project = this.projects.find((project) => project.name === name)!;
    if (name === 'portfolio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (project.redirectionUrl !== '')
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
