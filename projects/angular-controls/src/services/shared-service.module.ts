import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from './navbar.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    NavbarService
  ]
})
export class SharedServiceModule { }
