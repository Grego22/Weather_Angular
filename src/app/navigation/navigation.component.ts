import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  handleClick($event){
    alert("You clicked me!!!")
    console.log($event.target.innerHTML)
  }


  constructor() { }

  ngOnInit() {
  }

}
