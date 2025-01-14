import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNavPanelComponent } from './card-nav-panel.component';
import { SharedServiceModule } from '../../../services/shared-service.module';



@NgModule({
  declarations: [CardNavPanelComponent],
  imports: [
    CommonModule,
    SharedServiceModule
  ],
  exports: [CardNavPanelComponent]
})
export class CardNavPanelModule { }
