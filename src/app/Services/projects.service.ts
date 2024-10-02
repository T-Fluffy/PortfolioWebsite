import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Angular Project',
      summary: 'Sample Angular Project',
      description: 'description for the project',
      urlLink: 'some link ',
      tags: [Tag.ANGULAR],
    },
    {
      id: 1,
      name: 'Angular Project',
      summary: 'Sample Angular Project',
      description: 'description for the project',
      urlLink: 'some link ',
      tags: [Tag.ANGULAR],
    },
    {
      id: 2,
      name: 'Angular Project',
      summary: 'Sample Angular Project',
      description: 'description for the project',
      urlLink: 'some link ',
      tags: [Tag.ANGULAR],
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

}
