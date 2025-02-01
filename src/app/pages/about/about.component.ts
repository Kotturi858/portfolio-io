import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

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
  imports: [CdkAccordionModule, MatTooltipModule, CommonModule],
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
    concepts: [],
    architecture: [],
  };

  extractvalues() {
    return Object.keys(this.skillTags);
  }

  // architecture: [
  //   { name: 'Microservices', icon: 'hub' },
  //   { name: 'Monolithic Architecture', icon: 'apartment' },
  //   { name: 'Event-Driven Architecture', icon: 'sync_alt' },
  //   { name: 'Serverless Architecture', icon: 'cloud' },
  //   { name: 'Hexagonal Architecture', icon: 'widgets' },
  //   { name: 'Layered Architecture', icon: 'view_list' },
  //   { name: 'Clean Architecture', icon: 'cleaning_services' },
  //   { name: 'CQRS', icon: 'split_screen' },
  //   { name: 'Domain-Driven Design (DDD)', icon: 'category' },
  //   { name: 'Message-Driven Architecture', icon: 'send' },
  //   { name: 'SOA (Service-Oriented Architecture)', icon: 'settings_ethernet' }
  // ];

  // concepts: [
  //   { name: 'Data Structures & Algorithms (DSA)', icon: 'account_tree' },
  //   { name: 'Object-Oriented Programming (OOP)', icon: 'category' },
  //   { name: 'Functional Programming', icon: 'functions' },
  //   { name: 'Design Patterns', icon: 'pattern' },
  //   { name: 'Concurrency & Multithreading', icon: 'device_hub' },
  //   { name: 'Caching Strategies', icon: 'memory' },
  //   { name: 'Distributed Systems', icon: 'cloud_sync' },
  //   { name: 'Networking Basics', icon: 'lan' },
  //   { name: 'Security & Authentication', icon: 'security' },
  //   { name: 'CI/CD Pipelines', icon: 'build_circle' },
  //   { name: 'API Design (REST & GraphQL)', icon: 'api' },
  //   { name: 'Database Indexing & Query Optimization', icon: 'table_chart' },
  //   { name: 'Big O Notation', icon: 'speed' }
  // ];

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
