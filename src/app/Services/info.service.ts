import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class InfoService {
  users:number= 1000;
  http:Http = null; 
  constructor(http:Http) { 
	this.http = http; 
  }
  print(){
	return this.users;
  }

  getEmployees(){
	// you do all you logic here and then decide what to call 
	/// final return its promise giv you the data back to the calling comoponent 
      return this.http.get("http://dummy.restapiexample.com/api/v1/employees");	 		
  }
  

}