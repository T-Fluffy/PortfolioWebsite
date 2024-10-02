import { Component, OnInit } from '@angular/core';
import {  Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../models/Project';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../Services/projects.service';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent,CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: [],
})
export class PortfolioComponent implements OnInit {
  
  projects={} as Project[];


  constructor(private titleService: Title,private projectService: ProjectsService) {
    this.titleService.setTitle('Tarek Halloul - Portfolio');
  }
  ngOnInit(): void {
   this.projects = this.projectService.getProjects();
  }
  
}
