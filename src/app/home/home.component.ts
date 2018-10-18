import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items: Array<any>=[];
  constructor() {
  }

  ngOnInit(){
    for(let i=1;i<=8;i++)
      this.items.push('assets/slider_image/i'+i+'.jpg');
  }

}
