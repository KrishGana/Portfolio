import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class Achievements {
  achievements = [
    {
      title: 'Massive Database Optimization',
      desc: 'Reduced database size from 3TB to 10GB by migrating binary data from MSSQL to file storage and updating references, drastically improving performance and backup efficiency.',
      tags: ['SQL Server', 'Performance', 'Optimization']
    },
    {
      title: 'Database Migration (MSSQL → PostgreSQL)',
      desc: 'Successfully migrated large-scale production database from MSSQL to PostgreSQL with zero data loss, ensuring schema compatibility and data integrity.',
      tags: ['PostgreSQL', 'Migration', 'Data Integrity']
    },
    {
      title: 'Custom Authentication & Authorization System',
      desc: 'Designed and implemented a secure in-house authentication and role-based authorization system without external identity providers, ensuring fine-grained access control across applications.',
      tags: ['Security', 'RBAC', '.NET', 'Angular']
    },
    {
      title: 'API Rate Limiting Implementation',
      desc: 'Implemented API rate limiting to prevent abuse and ensure system stability under high concurrent usage.',
      tags: ['API', 'Security', 'Performance']
    },
    {
      title: 'Audit Logging System',
      desc: 'Developed a centralized audit logging mechanism to track user actions and system events for compliance and debugging.',
      tags: ['Logging', 'Compliance', 'Backend']
    },
    {
      title: 'OCR System Performance Design',
      desc: 'Designed CPU-based parallel processing architecture for OCR system, optimizing core utilization and handling concurrent requests efficiently.',
      tags: ['Python', 'OCR', 'System Design']
    },
    {
      title: 'Team Mentorship & Training',
      desc: 'Mentored developers in Angular and .NET full stack development, improving team productivity and code quality standards.',
      tags: ['Angular', '.NET', 'Leadership']
    }
  ];
}
