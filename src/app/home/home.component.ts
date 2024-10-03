import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../Services/projects.service';
import { Project } from '../models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule,CarouselModule,NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: []
})
export class HomeComponent implements OnInit{

  featuredProjects = {} as Project;
  constructor(private titleService: Title,private projectService: ProjectsService) {
    this.titleService.setTitle('Tarek Halloul - home');
  }
  ngOnInit(): void {
    this.featuredProjects = this.projectService.getProjectById(3);
  }
}
