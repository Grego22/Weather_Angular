import { Component, OnInit } from '@angular/core';
import { InfoService } from '../Services/info.service';
import {Http} from '@angular/http';
import { WireService} from '../Services/wire.service';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private country:string ="";
   private counts:number = 0;
   myService:InfoService  = null;
   wireService:WireService= null;
   employees=null;
   eventState= "panel panel-primary";

constructor(service:InfoService, wireService:WireService) {
  	  this.myService = service;
      this.wireService = wireService;
      this.wireService.subscribeEvent()
          .subscribe(this.handleEvents.bind(this));
}

handleEvents(event){
  console.log(event)
   this.counts++;
   console.log("We got the event!!!");
   this.country= event.country;
}





  displayEmployees(){
	   this.myService.getEmployees().subscribe(this.handleResponse.bind(this));
  }
  handleResponse(result){
	     console.log(this);
	    this.employees = result.json();
  }
  ngOnInit() {
  }

}
/// message::string[];
// constructor(){

//}

// getMessages(){
//   return this.messages
// }