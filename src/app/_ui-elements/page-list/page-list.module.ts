import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { SortComponent } from './sort/sort.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ItemComponent, SortComponent, PaginatorComponent, ContentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent
  ]
})
export class PageListModule { }
