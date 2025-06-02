import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

// Dialog component for displaying full project description
@Component({
  selector: 'project-description-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <p>{{ data.description }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  imports: [MatDialogModule, MatButtonModule],
  standalone: true
})
export class ProjectDescriptionDialog {
  constructor(
    public dialogRef: MatDialogRef<ProjectDescriptionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, description: string}
  ) {}
}

@Component({
  selector: 'app-projects',
  imports: [MatButtonModule, CommonModule, MatDialogModule],
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
      isFlipped: false,
    },
    {
      name: 'quizzie',
      displayPic: 'work-in-progress.gif',
      redirectionUrl: '',
      description:
        'This site allows you to participate in quizzes across various programming languages, enabling you to test your skills and compete against other players. It provides a platform for learning, growth, and friendly competition in programming challenges.',
      tags: ['Angular', 'PrimeNG', 'rxjs', 'Spring Boot', 'PostgreSQL'],
      isFlipped: false,
    },
    {
      name: 'Kallos Galleria',
      displayPic: 'work-in-progress.gif',
      redirectionUrl: 'https://chitra-kala.vercel.app/',
      description: 'A modern gallery app for uploading, organizing, and displaying high-quality images with smooth scrolling, lazy loading, and a seamless user experience.',
      tags: ['Angular', 'Node.js', 'AWS - S3', 'NgOptimisedImage'],
      isFlipped: false,
    },
    {
      name: 'Kotturi-toaster',
      displayPic: 'toaster-home.png',
      redirectionUrl: 'https://kotturi-toaster-demo.vercel.app/',
      description:
        'A modern toast notification npm package with multiple animations, positions, durations, sticky notifications, and many more features. It is designed to be highly customizable and easy to use, making it the perfect choice for any Angular application.',
      tags: ['Angular', 'npm', 'typescript'],
      isFlipped: false,
    },
    {
      name: 'Single Page To-do',
      displayPic: 'todo-image.png',
      redirectionUrl: 'https://single-page-todo.vercel.app/',
      description:
        'A modern to-do app built with Firebase (Spark tier) and Angular, featuring user authentication, different priority levels, filtering, search, and designed for different individuals. ',
      tags: ['Angular', 'Firebase', 'typescript', 'material'],
      isFlipped: false,
    },
    {
      name: 'Form Builder',
      displayPic: 'work-in-progress.gif',
      redirectionUrl: 'https://form-builder.vercel.app/',
      description:
        'A modern form builder built with Firebase (Spark tier) and Angular, featuring user authentication, different priority levels, filtering, search, and designed for different individuals. ',
      tags: ['Angular', 'typescript', 'material'],
      isFlipped: false,
    },
  ];

  constructor(private dialog: MatDialog) {}

  showFullDescription(project: any) {
    // Create a simple dialog to show the full description
    this.dialog.open(ProjectDescriptionDialog, {
      width: '500px',
      data: {
        title: project.name,
        description: project.description
      }
    });
  }

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

  toggleCardFlip(event: MouseEvent) {
    // Find the project card element
    const projectCard = (event.currentTarget as HTMLElement);
    
    // Find the project associated with this card
    const projectName = projectCard.querySelector('.project-title h3')?.textContent?.trim() || '';
    const project = this.projects.find(p => p.name === projectName);
    
    if (project) {
      // Toggle the flipped state
      project.isFlipped = !project.isFlipped;
      
      // Stop propagation for buttons inside the card to prevent toggling when clicking buttons
      const buttons = projectCard.querySelectorAll('button');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
        }, { once: true });
      });
    }
  }
}
