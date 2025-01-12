import { Component, Input } from '@angular/core';
import { JsonService } from '../../../services/json.service';
import { cardnavpanelitem } from './cardnavpanelitem.model';

@Component({
  selector: 'lib-card-nav-panel',
  standalone: false,
  templateUrl: './card-nav-panel.component.html',
  styleUrl: './card-nav-panel.component.css'
})
export class CardNavPanelComponent {
  @Input() jsonUrl!: string;
  cardNavItems: cardnavpanelitem[] = [];
  menuOpen: boolean = false;
  constructor(private jsonService: JsonService) { }

  ngOnInit() {
      this.jsonService.getModel<cardnavpanelitem[]>(this.jsonUrl).subscribe(data => {
        this.cardNavItems = data;
      });
  }
}
