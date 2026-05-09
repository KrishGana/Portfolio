import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
    activeFilter = 'All';
  filters = ['All', 'Angular', '.NET', 'Python', 'Full Stack'];

  projects = [
    {
      title: 'PROOF OF DELIVERY (POD)',
      type: 'Full Stack App',
      featured: false,
      desc: 'Invoice processing and warranty claim management system enabling end-to-end tracking of delivery, validation, and claim workflows. Integrated with OCR pipeline for automated data extraction and verification.',
      tags: ['Angular', '.NET', 'SQL Server', 'IIS'],
      live: null,
      github: null,
      filter: ['Full Stack', 'Angular', '.NET', 'Python']
    },
    {
      title: 'VENDOR ONBOARDING',
      type: 'Full Stack App',
      featured: false,
      desc: 'Vendor registration and approval system with document validation, workflow automation, and integration with internal systems for seamless onboarding and compliance tracking.',
      tags: ['Angular', '.NET', 'SQL Server'],
      github: null,
      live: null,
      filter: ['Full Stack', 'Angular', '.NET']
    },
    {
      title: 'CUSTOMER ONBOARDING',
      type: 'Full Stack App',
      featured: false,
      desc: 'Customer onboarding platform handling registration, document verification, and approval workflows with secure data handling and role-based access.',
      tags: ['Angular', '.NET', 'SQL Server'],
      live: null,
      github: null,
      filter: ['Full Stack', 'Angular', '.NET']
    },
    {
      title: 'DOCUMENT EXTRACTION OCR',
      type: 'AI / Backend System',
      featured: false,
      desc: 'OCR-based document processing system using hybrid extraction (keyword + coordinate logic) to extract structured data from invoices. Supports parallel processing from multiple sources.',
      tags: ['Python', 'OCR', 'RapidOCR', 'Backend'],
      live: null,
      github: null,
      filter: ['Python']
    },
    {
      title: 'INTELLIGENT QR DETECTION',
      type: 'AI / Utility Module',
      featured: false,
      desc: 'QR code detection and decoding module for extracting embedded invoice and product information, improving automation accuracy and reducing manual validation effort.',
      tags: ['Python', 'Computer Vision', 'QR'],
      live: null,
      github: null,
      filter: ['Python']
    }
  ];

  filteredProjects() {
    if (this.activeFilter === 'All') return this.projects;
    return this.projects.filter(p => p.filter.includes(this.activeFilter));
  }
}