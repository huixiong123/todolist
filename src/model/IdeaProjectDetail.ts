import {ProjectDetail} from './ProjectDetail';

export class IdeaProjectDetail {
  id: number;
  name: string;
  createDate: string;
  projects: ProjectDetail[];
  constructor(id: number, name: string, createDate: string, projects: ProjectDetail[]) {
    this.id = id;
    this.name = name;
    this.createDate = createDate;
    this.projects = projects;
  }
}
