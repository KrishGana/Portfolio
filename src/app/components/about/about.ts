import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  stackItems = [
    { icon: 'assets/logos/angular.svg', label: 'Angular 12+' }, { icon: 'assets/logos/typescript.svg', label: 'TypeScript' },
    { icon: 'assets/logos/dotnetcore.svg', label: 'ASP.NET Core' }, { icon: 'assets/logos/python.svg', label: 'Python' },
    { icon: 'assets/logos/sql-server.svg', label: 'SQL Server' }, { icon: 'assets/logos/postgres.svg', label: 'PostgreSQL' },
    { icon: 'assets/logos/apache.svg', label: 'Apache' }, { icon: 'assets/logos/iis.svg', label: 'IIS' }
  ];
  cards = [
    { icon: 'assets/logos/cpu.svg', title: 'Systems Thinker', text: 'Architecture-first mindset. Clean code, SOLID principles, testable designs.' },
    { icon: 'assets/logos/rocket.svg', title: 'Delivery Focused', text: 'Ship fast, iterate faster. Agile practitioner with a bias for action.' },
    { icon: 'assets/logos/palette.svg', title: 'UI Craftsman', text: 'Pixel-perfect interfaces backed by purposeful UX decisions.' },
  ];
}
