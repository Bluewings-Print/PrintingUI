import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'], 
  animations: [
    trigger('sidebarState', [
      state('expanded', style({
        width: '250px'
      })),
      state('collapsed', style({
        width: '64px'
      })),
      transition('expanded <=> collapsed', animate('300ms ease'))
    ]),
    trigger('textFade', [
      state('visible', style({
        opacity: 1,
        visibility: 'visible'
      })),
      state('hidden', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('visible <=> hidden', animate('200ms ease'))
    ])
  ], 
  encapsulation: ViewEncapsulation.None // Disables encapsulation
})
export class SidePanelComponent {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
