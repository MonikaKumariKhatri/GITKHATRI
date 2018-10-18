import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit {
  items: Array<any>=[];
  constructor() { }

  ngOnInit(){
    for(let i=1;i<=12;i++)
      this.items.push('assets/anni_images/i'+i+'.jpg');
  }

}
