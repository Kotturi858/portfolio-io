import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ResumeComponent } from './pages/resume/resume.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    ResumeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [],
})
export class AppComponent {
  constructor() {}

  navigateToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }
}
