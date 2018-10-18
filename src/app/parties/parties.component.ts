import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  items: Array<any>=[];
  constructor() { }

  ngOnInit(){
    for(let i=1;i<=9;i++)
      this.items.push('assets/corporate/i'+i+'.jpg');
  }

}
