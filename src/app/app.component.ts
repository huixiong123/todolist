import {Component, ViewChild} from '@angular/core';
import { MatMenuTrigger} from '@angular/material';
import { MatSidenav, MatSidenavContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  title = 'todolist-frontend';
  showFiller = false;
  opened = true;
  show = false;
  idea = 'Family';

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': 1 };
    this.contextMenu.openMenu();
  }

  onContextMenuAction1() {
    alert(`create project`);
  }

  onContextMenuAction2() {
    alert(`delete project`);
  }

  dbClick(value) {
    this.show = true;
    this.idea = value;
  }

  changeIdea(value) {
    this.show = false;
    this.idea = value;
  }
}


