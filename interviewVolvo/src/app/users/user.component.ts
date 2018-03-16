import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MainService],
})
export class UserComponent {
  title = 'app';
  routes: any;
  displayallUsers: any;  
  
  constructor(
    private userService:UserService, 
    private mainService:MainService) {

  }

  ngOnInit() {
    this.gerAllVolvoUsersDetails();
  }

  gerAllVolvoUsersDetails() {
  	this.userService.getAllUsers()
  	.subscribe(response => {
  		console.log(response);
       this.displayallUsers = response;
      });
  }

  navigateToViewDetails(id) { 
    this.mainService.navigateToViewDetails(id);
  }
}

