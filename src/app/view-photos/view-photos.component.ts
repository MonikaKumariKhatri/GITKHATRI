import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.css']
})
export class ViewPhotosComponent implements OnInit {
  totalImages : any=[];
  constructor() {
    for(let i=1;i<=69;i++)
      this.totalImages.push(i);
   }
  ngOnInit() {
  }
}
