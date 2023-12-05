import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  activeTab: string = 'Modify'; // set the default active tab

  openCity(Tab: string): void {
    this.activeTab = Tab;
  }
}
