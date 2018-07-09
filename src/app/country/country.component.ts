import { Component, OnInit } from '@angular/core';
import { MessageService } from '../Services/MessageService';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  // clickHandler .....
  changeCountry($event) {
    let countryClicked = $event.target.innerHTML;
    this.messageService.sendEvent({country: countryClicked});
    console.log("Event Fired.......")
  }
  private messageService: MessageService;
  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  ngOnInit() {
  }
}
