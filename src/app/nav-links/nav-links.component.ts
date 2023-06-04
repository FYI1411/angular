import { Component, OnInit } from '@angular/core';
import { NAV_LIST } from '../data/nav-hrefs';
import { user } from '../data/define/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})

export class NavLinksComponent implements OnInit {
  nav_list = NAV_LIST
  user_login : user | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.user_login = this.userService.getUser();
  }

}
