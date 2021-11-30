import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  // styleUrls: ['./detail.component.css']
  styles:[`
  .big{
    color: white;
  }
  `]
})
export class DetailComponent implements OnInit {
  showDetail = false;
  clicked = [];

  constructor() { }

  // onDetailClick(){
  //   this.showDetail = !this.showDetail;
  //   this.clicked.push(this.clicked.length +1)
  // }

  onDetailClick(){
    this.showDetail = !this.showDetail;
    this.clicked.push(new Date())
  }

  ngOnInit(): void {
  }

}
