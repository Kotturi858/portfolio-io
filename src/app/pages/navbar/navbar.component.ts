import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  imports: [MatTooltipModule, MatCardModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navButtons = [
    { label: '#home', icon: 'home', tooltip: 'HOME' },
    { label: '#about', icon: 'person', tooltip: 'ABOUT' },
    { label: '#projects', icon: 'tactic', tooltip: 'PROJECTS' },
    { label: '#contacts', icon: 'contact_mail', tooltip: 'CONTACTS' },
    { label: '#Resume', icon: 'description', tooltip: 'RESUME' },
  ];

  public activeSection: string = '';
  ngOnInit(): void {
    this.activeSection = '#home';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const sections = ['#home', '#about', '#contacts'];
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    sections.forEach((section) => {
      const element = document.getElementById(section.substring(1));
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          this.activeSection = section;
        }
      }
    });
  }
}
