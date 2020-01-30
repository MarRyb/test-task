import { PageListModule } from './page-list/page-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageListModule
  ],
  exports: [
    PageListModule
  ]
})
export class UiElementsModule { }
