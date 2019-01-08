import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MatMenuTrigger, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IdeaProjectDetail } from '../model/IdeaProjectDetail';
import { ProjectDetail } from '../model/ProjectDetail';
import { DialogData } from '../model/DialogData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;
  opened = true;
  ideas: IdeaProjectDetail[] = [];
  projects: ProjectDetail[] = [];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    const projects: ProjectDetail[] = [];
    projects.push(new ProjectDetail(1, 'Vacation In Rome', '2019-01-01 00:00:00'));
    projects.push(new ProjectDetail(2, 'Buy a New Car', '2019-01-02 00:00:00'));
    projects.push(new ProjectDetail(3, 'Throw Party for Eve', '2019-01-03 00:00:00'));
    this.ideas.push(new IdeaProjectDetail(1, 'Home', '2019-01-04 00:00:00', projects));
  }

  openAddIdeaDialog(): void {
    const dialogRef = this.dialog.open(DialogAddIdeaDialog,{
      width: '300px',
      data: { name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ideas.push(new IdeaProjectDetail(1, 'Family', '2019-01-08 00:00:00', []));
    });
  }

  openAddProjectDialog(): void {
    const dialogRef = this.dialog.open(DialogAddProjectDialog,{
      width: '300px',
      data: { name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projects.push(new ProjectDetail(1, 'reading book 2019', '2019-01-08 00:00:00'));
    });
  }

}

@Component({
  selector: 'dialog-add-idea-dialog',
  templateUrl: 'add-idea-dialog.html'
})
export class DialogAddIdeaDialog {
  constructor(public dialogRef: MatDialogRef<DialogAddIdeaDialog>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-add-project-dialog',
  templateUrl: 'add-project-dialog.html'
})
export class DialogAddProjectDialog {
  constructor(public dialogRef: MatDialogRef<DialogAddProjectDialog>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
