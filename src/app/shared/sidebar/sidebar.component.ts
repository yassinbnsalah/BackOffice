import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private  activatedRoute : ActivatedRoute,private router : Router){}


  GoToChamber(){this.router.navigate([this.activatedRoute.snapshot.params['universite']+"/chamber"])}
  GoToBlocs(){this.router.navigate([this.activatedRoute.snapshot.params['universite']+"/bloc"])}
  GoToFoyer(){this.router.navigate([this.activatedRoute.snapshot.params['universite']+"/foyer"])}
  GoToReservation(){this.router.navigate([this.activatedRoute.snapshot.params['universite']+"/reservation"])}
  GoToUniversite(){this.router.navigate([this.activatedRoute.snapshot.params['universite']])}
}
