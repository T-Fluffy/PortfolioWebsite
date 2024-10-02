import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../Services/projects.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredProjects = {} as Project;
  constructor(private titleService: Title,private projectService: ProjectsService) {
    this.titleService.setTitle('Tarek Halloul - home');
  }
  ngOnInit(): void {
    this.featuredProjects = this.projectService.getProjectById(0);
  }
}
