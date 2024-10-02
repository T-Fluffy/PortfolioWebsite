import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Angular Portfolio',
      summary: 'Sample Angular Project',
      description: 'description for the project',
      urlLink: 'some link ',
      pictures: ['assets/Projects_Pictures/project1/img1.png', 'assets/Projects_Pictures/project1/img2.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 1,
      name: 'Angular Portfolio3D',
      summary: 'Sample Angular Project',
      description: 'description for the project',
      urlLink: 'some link ',
      pictures: ['assets/Projects_Pictures/project1/img1.png', 'assets/Projects_Pictures/project1/img2.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.THREE],
    },
    {
      id: 2,
      name: 'Unity game',
      summary: 'Sample Angular Project',
      description: 'description for the project',
      urlLink: 'some link ',
      pictures: ['assets/Projects_Pictures/project1/img1.png', 'assets/Projects_Pictures/project1/img2.png'],
      tags: [Tag.UNITY,Tag.CSHARP],
    }
  ];
  
  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find(x => x.id === id);
    if(project == undefined) {
      throw new TypeError('There is no project with this id: ' + id);
    }
    return project;
  }
  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll=true;

      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag)===false){
          foundAll=false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });
    
    return filteredProjects;
  }
}
