import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/home/nav.component';
import { CursorComponent } from './components/home/cursor.component';
import { Home } from './components/home/home';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Skills } from './components/skills/skills';
import { Achievements } from './components/achievements/achievements';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavComponent, CursorComponent,
    Home, About, Contact, Experience, Projects, Achievements, Skills],
  standalone: true,
  providers: [
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  year = new Date().getFullYear();
  ngOnInit() { }
}
