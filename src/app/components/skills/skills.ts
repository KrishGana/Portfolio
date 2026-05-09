import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  activeCategory = 'frontend';
  categories = [
    { id: 'frontend', label: 'Frontend', icon: 'assets/logos/layout.svg' },
    { id: 'backend', label: 'Backend', icon: 'assets/logos/server.svg' },
    { id: 'data', label: 'Data', icon: 'assets/logos/database.svg' }
  ];
  skills = [
    { cat: 'frontend', name: 'Angular 12+', level: 95, color: 'var(--color-acid)', icon: 'assets/logos/angular.svg', meta: 'NgRx · RxJS · Signals · Standalone' },
    { cat: 'frontend', name: 'TypeScript', level: 92, color: '#3178c6', icon: 'assets/logos/typescript.svg', meta: 'Advanced types · Decorators · Generics' },
    { cat: 'frontend', name: 'HTML/CSS', level: 88, color: '#cc6699', icon: 'assets/logos/html.svg', meta: 'Animations · Grid · Custom Properties' },
    { cat: 'frontend', name: 'RxJS', level: 85, color: '#e57373', icon: 'assets/logos/rxjs.svg', meta: 'Operators · Subjects · Schedulers' },
    { cat: 'backend', name: 'ASP.NET Core', level: 93, color: '#512bd4', icon: 'assets/logos/dotnetcore.svg', meta: 'Web API · Authentication · Authorization · Minimal API' },
    { cat: 'backend', name: 'C#', level: 91, color: '#239120', icon: 'assets/logos/csharp.svg', meta: 'LINQ · Async/Await · SOLID' },
    { cat: 'backend', name: 'Python', level: 87, color: '#ffd43b', icon: 'assets/logos/python.svg', meta: 'FastAPI · Django · OCR · LLM' },
    { cat: 'data', name: 'SQL Server', level: 88, color: '#cc2927', icon: 'assets/logos/sql-server.svg', meta: 'Stored procs · Indexing · SSRS' },
    { cat: 'data', name: 'PostgreSQL', level: 84, color: '#336791', icon: 'assets/logos/postgres.svg', meta: 'JSONB · Full-text search · PgBouncer' },
    { cat: 'data', name: 'Redis', level: 78, color: '#dc382d', icon: 'assets/logos/redis.svg', meta: 'Caching · Pub/Sub · Lua scripts' },
    { cat: 'data', name: 'Entity Framework', level: 86, color: '#512bd4', icon: 'assets/logos/dotnetcore.svg', meta: 'Code-first · Migrations · Performance' }
  ];
  tools = ['Git', 'Jira', 'Postman', 'Swagger', 'Serilog', 'Hangfire'];

  filteredSkills() {
    return this.skills.filter(s => s.cat === this.activeCategory);
  }
}
