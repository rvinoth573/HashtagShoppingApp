import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs"
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService {

  url: any;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getData() {
    return this.http.get(this.url + 'items');

  }

  GetItemDetailbyId(id) {
    return this.http.get(this.url + 'items/' + id);
  }

  getCategories(){
    return this.http.get(this.url + 'categories');
    
  }

}