import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {
items: Array<any>=[];
  constructor() { }

  ngOnInit() {
    for(let i=1;i<=9;i++)
      this.items.push('assets/catering/i'+i+'.jpg');
  }

}
