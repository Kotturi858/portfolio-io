import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-navbar',
  imports: [
    MatTooltipModule,
    MatCardModule,
    CommonModule,
    MatButtonToggleModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navButtons = [
    { label: '#home', icon: 'home', tooltip: 'HOME' },
    { label: '#about', icon: 'person', tooltip: 'ABOUT' },
    { label: '#projects', icon: 'tactic', tooltip: 'PROJECTS' },
    { label: '#contacts', icon: 'contact_mail', tooltip: 'CONTACT' },
    { label: '#resume', icon: 'description', tooltip: 'RESUME' },
  ];

  public activeSection: string = '';
  iconsReady = false;
  ngOnInit(): void {
    this.activeSection = '#home';
    setTimeout(() => (this.iconsReady = true), 100);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const sections = ['#home', '#about', '#contacts', '#projects', '#resume'];

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
