import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {
  @Input()
  name;
  phone;
  @Input('phones')
  get phones(){
    return this.phone;
  }
  set phones(value){
    let  v = Number(value);
    this.phone = Number.isNaN(v)? 933533000 : v;
  }
  @Input()
  email;


  constructor() { }

  ngOnInit(): void {
  }

}
