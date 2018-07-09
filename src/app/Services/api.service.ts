import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'

@Injectable()
export class ApiService {
  private http:Http
  constructor(http: Http) {
    this.http = http
   }


   getUsers(){
     let username ="admin"
     let password ="admin"
     let headers = new Headers()
     headers.append("Authroization", "Basic" + btoa(username + ":" + password))
     return this.http.get("http://localhost:8181/users", {headers:headers})
   }
}
