import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  
  routes: any;
  clickedUserDetails: any;
  currentPage: any;
  currEmployee: any;

  constructor(
    private router: Router,
    private userService:UserService,) {

  }
  ngOnInit() {
    console.log(this.router.url); 

    this.currentPage = this.router.url;
    this.currentPage = this.currentPage.split("/");
    console.log(this.currentPage[2]);

    this.currEmployee = this.currentPage[2];

    this.userService.getAllUsers()
    .subscribe(response => {
      console.log(response);
       this.clickedUserDetails = response;
      });
  }  
}

