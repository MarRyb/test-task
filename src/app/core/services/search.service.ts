import { RemoveUndefinedSerializer } from './../serializers/remove_undefined.serizlier';
import { ISearchParams } from './../interfaces/search_params.interface';
import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(
    private apiService: ApiService,
    private removeUndefinedSerializer: RemoveUndefinedSerializer
  ) {}

  search(params: ISearchParams) {
    params = this.removeUndefinedSerializer.toJson(params);
    return this.apiService.get('/api/search', params);
  }

}
