import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  items: Array<any> = [];
  constructor() { }

  ngOnInit() {
    for(let i=1;i<=12;i++)
      this.items.push('assets/birthday/i'+i+'.jpg');
  }

}
