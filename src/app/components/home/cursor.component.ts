import { Component, OnInit, OnDestroy, Renderer2, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-dot" [style.left.px]="x" [style.top.px]="y"></div>
    <div class="cursor-ring" [style.left.px]="rx" [style.top.px]="ry" [class.hover]="isHover"></div>
  `,
  styles: [`
    :host { pointer-events: none; }
    .cursor-dot {
      position: fixed; pointer-events: none; z-index: 9999;
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--color-acid);
      transform: translate(-50%, -50%);
    }
    .cursor-ring {
      position: fixed; pointer-events: none; z-index: 9998;
      width: 32px; height: 32px; border-radius: 50%;
      border: 1px solid var(--color-acid);
      transform: translate(-50%, -50%);
      transition: width 0.3s, height 0.3s;
      opacity: 0.6;
    }
    .cursor-ring.hover { width: 56px; height: 56px; opacity: 1; }
  `]
})
export class CursorComponent implements OnInit, OnDestroy {
  x = 0; y = 0; rx = 0; ry = 0; isHover = false;
  private listeners: (() => void)[] = [];

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.listeners.push(
      this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
        this.x = e.clientX; this.y = e.clientY;
        requestAnimationFrame(() => { 
          this.rx = e.clientX; this.ry = e.clientY;
          this.cdr.detectChanges(); // Force update for the trailing ring
        });
      }),
      this.renderer.listen('document', 'mouseover', (e: MouseEvent) => {
        const t = e.target as HTMLElement;
        // Check if t.closest exists to avoid crashes on Text nodes
        this.isHover = !!(t && t.closest && t.closest('a,button,[data-hover]'));
      })
    );
  }
  ngOnDestroy() { this.listeners.forEach(fn => fn()); }
}
