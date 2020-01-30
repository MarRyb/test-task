import { ISelectOption } from './../../../core/interfaces/select_option.interface';
import { ISearchParams } from './../../../core/interfaces/search_params.interface';
import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-list-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Input() params: ISearchParams;
  @Output() changeCallback: EventEmitter<any> = new EventEmitter();

  public options: Array<ISelectOption> = [
    { value: 'date:desc', title: 'Date (newest first)' },
    { value: 'date:asc', title: 'Date (oldest first)' },
    { value: 'views:desc', title: 'Views (999-0)' },
    { value: 'views:asc', title: 'Views (0-999)' }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeOrder($event: any) {
    this.changeCallback.emit($event.target.value);
  }

}
