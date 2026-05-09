import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="scrolled">
      <div class="nav-logo" (click)="scrollTo('home')">
        <img src="assets/images/Gana_Logo.jpg" alt="Gana Logo" class="logo-img">
      </div>
      <ul class="nav-links">
        <li *ngFor="let item of navItems; let i = index">
          <a (click)="scrollTo(item.id)" [class.active]="activeSection === item.id" data-hover>
            <span class="nav-index">0{{i+1}}</span>
            <span class="nav-label">{{item.label}}</span>
          </a>
        </li>
      </ul>
      <div class="nav-status">
        <span class="status-dot"></span>
        <span>Available for work</span>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.5rem 3rem;
      transition: all 0.4s ease;
    }
    nav.scrolled {
      background: rgba(10,10,10,0.92);
      backdrop-filter: blur(20px);
      padding: 1rem 3rem;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .nav-logo {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .logo-img {
      height: 40px;
      width: 40px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid var(--color-acid);
      transition: all 0.3s ease;
      padding: 2px;
      background: rgba(255, 255, 255, 0.05);
    }
    .logo-img:hover {
      transform: scale(1.1) rotate(5deg);
      border-color: var(--color-paper);
    }
    .nav-links {
      display: flex; list-style: none; gap: 2.5rem;
    }
    .nav-links a {
      display: flex; flex-direction: column;
      cursor: pointer; text-decoration: none;
      color: var(--color-muted);
      transition: color 0.3s;
      position: relative;
    }
    .nav-links a::after {
      content: ''; position: absolute; bottom: -4px; left: 0;
      width: 0; height: 1px; background: var(--color-acid);
      transition: width 0.3s;
    }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
    .nav-links a:hover, .nav-links a.active { color: var(--color-paper); }
    .nav-index { font-family: var(--font-mono); font-size: 0.6rem; color: var(--color-acid); margin-bottom: 2px; }
    .nav-label { font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; }
    .nav-status {
      display: flex; align-items: center; gap: 0.5rem;
      font-family: var(--font-mono); font-size: 0.7rem;
      color: var(--color-muted);
    }
    .status-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: #4ade80;
      box-shadow: 0 0 8px #4ade80;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
    }
    @media (max-width: 768px) {
      nav { padding: 1rem 1.5rem; }
      .nav-links { gap: 1.2rem; }
      .nav-status { display: none; }
    }
  `]
})
export class NavComponent {
  scrolled = false;
  activeSection = 'home';
  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
    const sections = this.navItems.map(n => n.id);
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) {
        this.activeSection = id; break;
      }
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
