import { IEntityData, IEntityPagination } from './../../../core/interfaces/entity.interface';
import { ISearchParams } from './../../../core/interfaces/search_params.interface';
import { SearchService } from './../../../core/services/search.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-list-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() entityType: string;

  private params: ISearchParams;
  public data: IEntityData;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    this.params = {
      entities: this.entityType,
      perPage: queryParams.perPage,
      interfaceLanguage: 'en',
      preferredLanguage: 'en',
      sortBy: queryParams.sortBy,
      page: queryParams.page
    };

    this.loadItems();
  }

  loadItems() {
    this.changeUrl(this.params.page, this.params.perPage, this.params.sortBy);
    this.searchService.search(this.params).subscribe((data) => {
      this.data = data.data;
    });
  }

  changePagination(pagination: IEntityPagination) {
    this.params.page = pagination.page;
    this.params.perPage = pagination.limit;
    this.loadItems();
  }

  changeSorting(value: string) {
    this.params.page = 1;
    this.params.sortBy = value;
    this.loadItems();
  }

  changeUrl(page: number, perPage: number, sortBy: string) {
    const queryParams: Params = { page, perPage, sortBy };
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge'
      }
    );
  }

}
