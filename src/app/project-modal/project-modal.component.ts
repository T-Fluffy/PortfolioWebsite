import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/Project';


import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [ CommonModule,DialogModule, CarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
[x: string]: any;

  @Input() project = {} as Project;
  @Input()
  visible!: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  slides = [
    { id: 1, content: 'assets/Projects_Pictures/project1/img1.png' },
    { id: 2, content: 'assets/Projects_Pictures/project1/img2.png' }
  ];

  constructor( ) {}

  toggleVisible() {
    this.visibleChange.emit(this.visible);
  }
}