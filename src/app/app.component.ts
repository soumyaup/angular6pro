
import { Component,OnInit } from '@angular/core';
import { TestService } from './test.service';
//import { HttpClient } from 'selenium-webdriver/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username;
  password;
  //constructor(private svc: TestService, private http: HttpClient) {
   // this.svc.printToConsole('got the service');
  //}

  ngOnInit() {
    //this.http.get('http://api.github.com/users/koushikkothagal')
    
  }
  
}


