import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.css']
})
export class MarriageComponent implements OnInit {
  items: Array<any>=[];
  constructor() { }

  ngOnInit(){
    for(let i=1;i<=9;i++)
      this.items.push('assets/marry_images/i'+i+'.jpg');
  }

}
