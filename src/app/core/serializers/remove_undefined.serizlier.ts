import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveUndefinedSerializer {

  toJson(params: any): any {
    Object.keys(params).forEach((key) => (params[key] == null) && delete params[key]);
    return params;
  }

}
