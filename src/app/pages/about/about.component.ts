import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgxTracingBeamComponent } from '@omnedia/ngx-tracing-beam';

// Define the type for a skill object
interface Skill {
  assetDet: string;
  tooltip: string;
  learnedStatus: number;
}

// Define the type for the skillTags object
interface SkillTags {
  [key: string]: Skill[];
  languages: Skill[];
  frameworks: Skill[];
  databases: Skill[];
  tools: Skill[];
  cloud: Skill[];
  libraries: Skill[];
  runtime: Skill[];
  concepts: Skill[];
  architecture: Skill[];
}
@Component({
  selector: 'app-about',
  imports: [
    CdkAccordionModule,
    MatTooltipModule,
    CommonModule,
    NgxFadeComponent,
    NgxTracingBeamComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}
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
        learnedStatus: 10,
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
    concepts: [
      {
        assetDet: 'account_tree',
        tooltip: 'Data Structures & Algorithms (DSA)',
        learnedStatus: 70,
      },
      {
        assetDet: 'lan',
        tooltip: 'Networking Basics aka System Design',
        learnedStatus: 60,
      },
      {
        assetDet: 'pattern',
        tooltip: 'Design Patterns',
        learnedStatus: 70,
      },
      {
        assetDet: 'category',
        tooltip: 'Object-Oriented Programming (OOP)',
        learnedStatus: 90,
      },
      {
        assetDet: 'build_circle',
        tooltip: 'CI/CD Pipelines',
        learnedStatus: 50,
      },
      {
        assetDet: 'table_chart',
        tooltip: 'Database Indexing & Query Optimization',
        learnedStatus: 80,
      },
    ],
    architecture: [
      {
        assetDet: 'hub',
        tooltip: 'Microservices',
        learnedStatus: 90,
      },
      {
        assetDet: 'apartment',
        tooltip: 'Monolithic Architecture',
        learnedStatus: 90,
      },
      {
        assetDet: 'sync_alt',
        tooltip: 'Event-Driven Architecture',
        learnedStatus: 90,
      },
      {
        assetDet: 'cloud',
        tooltip: 'Serverless Architecture',
        learnedStatus: 70,
      },
    ],
  };

  extractvalues() {
    return Object.keys(this.skillTags);
  }

  ngAfterViewInit() {
    const updateView = () => {
      this.cdr.detectChanges();
      requestAnimationFrame(updateView);
    };

    requestAnimationFrame(updateView);

    // setTimeout(() => {
    //   this.cdr.detectChanges();
    // }, 1);
  }

  getDynamicStyles(skillStat: number) {
    switch (true) {
      case skillStat >= 75 && skillStat <= 100:
        return 'bg-success';
      case skillStat >= 50 && skillStat <= 75:
        return 'bg-info';
      case skillStat >= 25 && skillStat <= 50:
        return 'bg-warning';
      default:
        return 'bg-danger';
    }
  }
}
