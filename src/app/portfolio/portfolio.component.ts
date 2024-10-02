import { Component, OnInit } from '@angular/core';
import {  Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../models/Project';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../Services/projects.service';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { FormsModule } from '@angular/forms';
import { Tag } from '../models/Tag';
import e from 'express';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent,CommonModule,CollapseModule,FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: [],
})
export class PortfolioComponent implements OnInit {
  
  projects={} as Project[];
  isCollapsed : boolean= true;
  filtering: boolean = false;
  //Languages:
  typescript: boolean = false;
  csharp: boolean = false;
  cpp: boolean = false;
  python: boolean = false;
  java: boolean = false;
  //Frameworks:
  angular: boolean = false;
  react: boolean = false;
  unity: boolean = false;
  unreal: boolean = false;
  dotnet: boolean = false;
  //Libraries:
  threejs: boolean = false;

  constructor(private titleService: Title,private projectService: ProjectsService) {
    this.titleService.setTitle('Tarek Halloul - Portfolio');
  }

  ngOnInit(): void {
   this.projects = this.projectService.getProjects();
  }
  Filter()  {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.cpp) {
      filterTags.push(Tag.CPP);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }

    if (this.unreal) {
      filterTags.push(Tag.UNREAL);
    }
    if (this.dotnet) {
      filterTags.push(Tag.DOTNET);
    }
    if (this.unity) {
      filterTags.push(Tag.UNITY);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    
    if (this.threejs) {
      filterTags.push(Tag.THREE);
    }
    if(this.angular || this.typescript || this.cpp || this.python || this.java || this.csharp || this.unreal || this.dotnet || this.unity || this.react || this.threejs) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }
    this.projects=this.projectService.getProjectsByFilter(filterTags);
  }
  ResetFilter() {
    this.java = false;
    this.cpp = false;
    this.python = false;
    this.typescript = false;
    this.csharp = false;
    this.unity = false;
    this.unreal = false;
    this.dotnet = false;
    this.angular = false;
    this.react = false;
    this.threejs = false;
    this.filtering = false;

    this.projects = this.projectService.getProjects();    
  }
  
}
