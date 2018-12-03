import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username;
  password;
  constructor() { }

  ngOnInit() {
  }
  login() {
    event.preventDefault()
    document.getElementById("Wrapper").hidden=true;
    console.log(this.username);
    console.log(this.password);
  }
}
