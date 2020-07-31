import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }


  private getApiPath(): string{
    return environment.api;
  }

  private getDomainPath(): string{
    return environment.domain;
  }

  buildEndpoint(endpoint: string): string{
    return `${this.getDomainPath()}${this.getApiPath()}${endpoint}`;
  }

  generateAuthorization(username : string, password : string) : string {
    let auth = btoa(`${username}:${password}`);
    return `Basic ${auth}`;
  }

  generateBasicAuthHeader(username : string, password : string) : HttpHeaders {
    let header = new HttpHeaders()
    .append("Authorization", this.generateAuthorization(username, password))
    .append("x-r3app-appcode", environment.appCode);

    return header;
  }



}
