import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTooltipModule } from '@angular/material/tooltip';

// Define the type for a skill object
interface Skill {
  assetDet: string;
  tooltip: string;
  learnedStatus: number;
}

// Define the type for the skillTags object
interface SkillTags {
  [key: string]: Skill[]; // Index signature
  languages: Skill[];
  frameworks: Skill[];
  databases: Skill[];
  tools: Skill[];
  cloud: Skill[];
  libraries: Skill[];
  runtime: Skill[];
  concepts: Skill[];
}
@Component({
  selector: 'app-about',
  imports: [CdkAccordionModule, MatTooltipModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  items = ['SKILLS', 'EXPERIENCE', 'EDUCATION'];
  expandedIndex = 0;
  skillTags: SkillTags = {
    languages: [
      {
        assetDet: 'java-original-wordmark.svg',
        tooltip: 'JAVA',
        learnedStatus: 80,
      },
      {
        assetDet: 'javascript-original.svg',
        tooltip: 'JAVASCRIPT',
        learnedStatus: 90,
      },
      {
        assetDet: 'typescript-original.svg',
        tooltip: 'TYPESCRIPT',
        learnedStatus: 90,
      },
      { assetDet: 'html5-original.svg', tooltip: 'HTML5', learnedStatus: 80 },
      { assetDet: 'css3-original.svg', tooltip: 'CSS3', learnedStatus: 70 },
      { assetDet: 'sass-original.svg', tooltip: 'SASS', learnedStatus: 70 },
    ],
    frameworks: [
      {
        assetDet: 'angular-original.svg',
        tooltip: 'ANGULAR',
        learnedStatus: 90,
      },
      {
        assetDet: 'spring-original-wordmark.svg',
        tooltip: 'SPRING',
        learnedStatus: 80,
      },
      {
        assetDet: 'bootstrap-original.svg',
        tooltip: 'BOOTSTRAP',
        learnedStatus: 70,
      },
      {
        assetDet: 'react-original.svg',
        tooltip: 'REACT',
        learnedStatus: 10,
      },
    ],
    databases: [
      {
        assetDet: 'postgresql-original-wordmark.svg',
        tooltip: 'POSTGRESQL',
        learnedStatus: 80,
      },
      {
        assetDet: 'oracle-original.svg',
        tooltip: 'ORACLE',
        learnedStatus: 80,
      },
      {
        assetDet: 'sqldeveloper-original.svg',
        tooltip: 'SQL DEVELOPER',
        learnedStatus: 80,
      },
    ],
    tools: [
      {
        assetDet: 'vscode-original-wordmark.svg',
        tooltip: 'VS CODE',
        learnedStatus: 100,
      },
      {
        assetDet: 'eclipse-original-wordmark.svg',
        tooltip: 'ECLIPSE',
        learnedStatus: 90,
      },
      {
        assetDet: 'postman-original.svg',
        tooltip: 'POSTMAN',
        learnedStatus: 95,
      },
      {
        assetDet: 'docker-original.svg',
        tooltip: 'DOCKER',
        learnedStatus: 0,
      },
      {
        assetDet: 'kubernetes-original.svg',
        tooltip: 'KUBERNETES',
        learnedStatus: 0,
      },
    ],
    runtime: [
      {
        assetDet: 'nodejs-plain-wordmark.svg',
        tooltip: 'NODE.JS',
        learnedStatus: 80,
      },
    ],
    libraries: [
      { assetDet: 'rxjs-original.svg', tooltip: 'RXJS', learnedStatus: 70 },
      { assetDet: 'ngrx-original.svg', tooltip: 'NGRX', learnedStatus: 10 },
    ],
    cloud: [
      {
        assetDet: 'amazonwebservices-original-wordmark.svg',
        tooltip: 'AWS',
        learnedStatus: 50,
      },
    ],
    concepts: []
  };

  extractvalues() {
    return Object.keys(this.skillTags);
  }
}
