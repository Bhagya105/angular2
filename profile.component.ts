import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  check:boolean=true;
  constructor() { 
    this.user={name:'Bhagya',
  job:'Student',
  address:'Krishna (H),Santhipuram P.O,Chanaganacherry,Kottayam',
   phone:[]
  };
  }
togglecheck(){
  this.check=!this.check;
}
  ngOnInit() {
  }

}
