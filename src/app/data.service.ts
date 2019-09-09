import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http : HttpClient
  ) { }

  auth(data : any) {
    return this.http.post('https://api.balta.io/v1/accounts/authenticate', data);
  }

  getCourses () {
    return this.http.get('https://api.balta.io/v1/courses')
  }
}
