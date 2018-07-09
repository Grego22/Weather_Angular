import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/Info.service';
import { WireService} from 'src/app/services/wire.service';
import {Http} from '@angular/http';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private country:string ="";
   private counts:number = 0;
   myservice:InfoService  = null;
   wireService:WireService= null;
   employees=null;
   eventState= "panel panel-primary";

constructor(service:InfoService, wireService:WireService) {
  	  this.myservice = service;
      this.wireService = wireService;
      this.wireService.subscribeEvent()
          .subscribe(this.handleEvents.bind(this));
}

handleEvents(event){
  console.log(event)
   this.counts++;
   console.log("event received.................");
   this.country= event.country;
}





  displayEmployees(){
	   this.myservice.getEmployees().subscribe(this.handleResponse.bind(this));
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