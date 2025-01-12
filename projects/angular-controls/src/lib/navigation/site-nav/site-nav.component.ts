import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'lib-site-nav',
  standalone: false,
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.css']
})
export class SiteNavComponent implements OnInit {
  navbarItems: any; // Ensure default structure
  menuOpen: boolean = false;
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.getNavbarItems().subscribe(data => {
      this.navbarItems = data;
    });
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
