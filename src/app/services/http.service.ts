import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:4200';
  hostUrl = 'http://localhost/lungvichai/api/index.php/';
  headers = new Headers();
  options = new RequestOptions();
  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.options.headers = this.headers;
  }
  get(endpoint) {
    return this.http.get(this.hostUrl + endpoint, this.options).map(res => res.json());
  }
}
