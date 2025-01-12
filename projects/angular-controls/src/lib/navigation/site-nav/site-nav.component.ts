import { Component, Input, OnInit } from '@angular/core';
import { JsonService } from '../../../services/json.service';
import { sitenav } from './sitenav.model';

@Component({
  selector: 'lib-site-nav',
  standalone: false,
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.css']
})
export class SiteNavComponent implements OnInit {
  @Input() jsonUrl!: string;
  classNames: string[] = ['left', 'right'];
  navbarItems!: sitenav;
  menuOpen: boolean = false;
  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.getModel<sitenav>(this.jsonUrl).subscribe(data => {
      this.navbarItems = data;
    });
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
