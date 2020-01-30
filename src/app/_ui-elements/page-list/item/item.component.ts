import { IEntity } from './../../../core/interfaces/entity.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IEntity;

  constructor() { }

  ngOnInit() {
  }

}
