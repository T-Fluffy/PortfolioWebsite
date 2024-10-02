// project-card.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../models/Project';


import { ButtonModule } from 'primeng/button';
import { ProjectModalComponent } from "../project-modal/project-modal.component";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, ButtonModule, ProjectModalComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  providers: [],
})
export class ProjectCardComponent {

  @Input() project = {} as Project;
  visible: boolean = false;

  constructor() {}

  showDialog() {
    this.visible = true;
  }
  
}