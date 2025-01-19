import { Component, HostListener } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatTooltipModule, MatCardModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navButtons = [
    { label: '#home', icon: 'home' },
    { label: '#about', icon: 'person' },
    { label: '#contacts', icon: 'tactic' },
    { label: 'contacts', icon: 'contact_mail' },
    { label: 'RESUME', icon: 'description' },
  ];

  public activeSection: string = '';
  ngOnInit(): void {
    // Initialize with the first section as active
    this.activeSection = 'home';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Check the position of each section
    const sections = ['home', 'about', 'contact'];
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          this.activeSection = section;
        }
      }
    });
  }
}
