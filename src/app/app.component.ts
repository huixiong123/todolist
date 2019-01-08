import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { IdeaProjectDetail } from '../model/IdeaProjectDetail';
import { ProjectDetail } from '../model/ProjectDetail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;
  opened = true;
  ideas: IdeaProjectDetail[] = [];

  constructor() {
  }

  ngOnInit() {
    const projects: ProjectDetail[] = [];
    projects.push(new ProjectDetail(1, 'Vacation In Rome', '2019-01-01 00:00:00'));
    projects.push(new ProjectDetail(2, 'Buy a New Car', '2019-01-02 00:00:00'));
    projects.push(new ProjectDetail(3, 'Throw Party for Eve', '2019-01-03 00:00:00'));
    this.ideas.push(new IdeaProjectDetail(1, 'Home', '2019-01-04 00:00:00', projects));
  }
}
