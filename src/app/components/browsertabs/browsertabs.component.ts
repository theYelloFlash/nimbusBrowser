import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-browsertabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './browsertabs.component.html',
  styleUrl: './browsertabs.component.scss'
})

export class BrowsertabsComponent {
  tabs: string[] = [];
  addingTabIndex: number | null = null;
  removingTabIndex: number | null = null;

  construstor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tabs = ['Google']

  }

  cancelTab(index: number) {
    // this.tabs.splice(index, 1);
    this.removingTabIndex = index;

    // Remove the tab after the animation completes
    setTimeout(() => {
      this.tabs.splice(index, 1);
      this.removingTabIndex = null;
    }, 300);
  }

  addTab() {
    this.tabs.push('New Tab');
    this.addingTabIndex = this.tabs.length - 1;

    // Remove animation class after it completes
    setTimeout(() => {
      this.addingTabIndex = null;
    }, 300);
  }
}
