import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  searchValue: string = '';
  isSortedA: boolean = false;
  isSortedB: boolean = false;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers();
  }

  onInput(event: any) {
    this.searchValue = event.target.value;
    this.usersService.searchUsers(this.searchValue, ["name", "email", "phone"]);
  }


  //added lat sort with sorting in incr. and decr. orders

  onSortClick(props = '') {
    if(props=='a') {
      this.isSortedA = !this.isSortedA;
      this.usersService.sortUsersA(this.isSortedA);
    } else {
      this.isSortedB = !this.isSortedB;
      this.usersService.sortUsersB(this.isSortedB);
    }
  }
}
