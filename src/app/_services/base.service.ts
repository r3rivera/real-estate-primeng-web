import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }


  getApi(): string{
    return environment.api;
  }
}
