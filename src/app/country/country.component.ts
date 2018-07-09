import { Component, OnInit } from '@angular/core';
import { WireService } from '../Services/wire.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  // clickHandler .....
  changeCountry($event) {
    let countryClicked = $event.target.innerHTML;
    this.wireService.sendEvent({country: countryClicked});
    console.log("Event Fired.......")
  }
  private  wireService: WireService;
  constructor(wireService: WireService) {
    this.wireService = wireService;
  }

  ngOnInit() {
  }
}
