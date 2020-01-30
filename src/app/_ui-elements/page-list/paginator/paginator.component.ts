import { ISelectOption } from './../../../core/interfaces/select_option.interface';
import { IEntityPagination } from './../../../core/interfaces/entity.interface';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-list-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() pagination: IEntityPagination;
  @Output() changeCallback: EventEmitter<any> = new EventEmitter();

  public options: Array<ISelectOption> = [
    { value: '10', title: '10' },
    { value: '20', title: '20' },
    { value: '50', title: '50' },
    { value: '100', title: '100' }
  ];

  constructor() { }

  ngOnInit() {
  }

  changePage(increment: number) {
    this.pagination.page = this.pagination.page + increment;
    this.changeCallback.emit(this.pagination);
  }

  changePerPage($event: any) {
    this.pagination.limit = $event.target.value;
    this.pagination.page = 1;
    this.changeCallback.emit(this.pagination);
  }

}
