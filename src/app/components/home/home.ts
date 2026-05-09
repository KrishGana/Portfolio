import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  nameLines = ['GANANATHAN', 'KRISHNAN', 'SENTHILKUMAR'];
  stats = [
    { num: '5+', label: 'Years Experience' },
    { num: '30+', label: 'Projects Built' },
    { num: '12+', label: 'Happy Clients' },
  ];
  terminalLines = [
    { prompt: '>', text: 'whoami', type: 'cmd' },
    { prompt: '', text: 'gananathan_ks // fullstack_dev', type: 'success' },
    { prompt: '>', text: 'cat skills.json', type: 'cmd' },
    { prompt: '', text: '["Angular","C#/.NET","Python","MS-SQL", "PostgreSQL"]', type: 'out' },
    { prompt: '>', text: 'git log --oneline -1', type: 'cmd' },
    { prompt: '', text: 'a3f92b1 feat: shipped prod v3.2.0', type: 'success' },
    { prompt: '>', text: 'npm run deploy', type: 'cmd' },
    { prompt: '', text: '✓ Build complete. Portfolio is live!', type: 'success' },
  ];

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private animId!: number;
  private dots: Array<{x:number,y:number,vx:number,vy:number,r:number}> = [];

  ngOnInit() {
    setTimeout(() => this.initCanvas(), 100);
  }

  initCanvas() {
    this.canvas = document.querySelector('.bg-canvas') as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d')!;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    for (let i = 0; i < 60; i++) {
      this.dots.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
      });
    }
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  animate() {
    this.animId = requestAnimationFrame(() => this.animate());
    const { ctx, canvas, dots } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const d of dots) {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
      if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(200,255,100,0.4)';
      ctx.fill();
    }
    for (let i = 0; i < dots.length; i++) {
      for (let j = i+1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(200,255,100,${0.12*(1-dist/120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy() { cancelAnimationFrame(this.animId); }
}
