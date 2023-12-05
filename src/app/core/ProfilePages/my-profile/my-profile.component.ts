import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  activeTab: string = 'Modify'; // set the default active tab

  openCity(Tab: string): void {
    this.activeTab = Tab;
  }
}
