import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../auth/connector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbarOpen = false;
  connected: boolean;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private connectorService: ConnectorService, private router: Router) {
    this.connectorService.connectedObs
    .subscribe((connected) => this.connected = connected)
    this.connectorService.isLoggedIn();
   }

  ngOnInit(): void {
  }

  logout() {
    console.log('je logout')
    this.connected = false;
    this.connectorService.logout();
    this.router.navigate(['/public/dashboard']);
  }
}