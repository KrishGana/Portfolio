import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  jobs = [
    {
      company: 'Exalca Technologies',
      role: 'Software Developer',
      period: 'Oct 2024 – Present',
      type: 'Full-time',
      color: '#c8ff64',
      highlights: [
        'Leading development of full stack applications including POD, Vendor and Customer onboarding systems',
        'Designed secure authentication, authorization, API rate limiting and audit logging systems',
        'Contributed to OCR and intelligent document processing solutions',
        'Driving performance and architecture improvements across applications'
      ],
      tech: ['Angular', '.NET', 'Python', 'SQL Server', 'PostgreSQL']
    },
    {
      company: 'Exalca Technologies',
      role: 'Associate Developer',
      period: 'Oct 2022 – Oct 2024',
      type: 'Full-time',
      color: '#ff9a3c',
      highlights: [
        'Developed and maintained enterprise applications for invoice processing and onboarding workflows',
        'Worked on OCR-based document extraction and QR detection modules',
        'Implemented backend services and APIs for scalable processing',
        'Collaborated with cross-functional teams to deliver production-ready features'
      ],
      tech: ['Angular', '.NET', 'Python', 'SQL Server']
    },
    {
      company: 'Exalca Technologies',
      role: 'Junior Developer',
      period: 'Jul 2021 – Oct 2022',
      type: 'Full-time',
      color: '#7c6bff',
      highlights: [
        'Built UI components and backend APIs for internal business applications',
        'Worked on database operations, queries, and performance tuning',
        'Gained hands-on experience in full stack development',
        'Supported production issues and bug fixes'
      ],
      tech: ['Angular', '.NET', 'SQL Server']
    },
    {
      company: 'Exalca Technologies',
      role: 'Software Developer Intern',
      period: 'Oct 2020 – Jul 2021',
      type: 'Internship',
      color: '#4ade80',
      highlights: [
        'Assisted in development of web applications using Angular and .NET',
        'Worked on bug fixes, minor features, and testing support',
        'Learned enterprise development practices and workflows'
      ],
      tech: ['Angular', '.NET']
    }
  ];
  // education = [
  //   { year: '2014 – 2018', degree: 'B.E. Computer Science & Engineering', school: 'Anna University', note: 'First Class with Distinction' },
  //   { year: '2023', degree: 'Microsoft Certified: Azure Developer Associate', school: 'Microsoft', note: 'AZ-204' },
  //   { year: '2022', degree: 'Angular Architect Accelerator', school: 'Angular University', note: 'Advanced Certification' },
  // ];
}
