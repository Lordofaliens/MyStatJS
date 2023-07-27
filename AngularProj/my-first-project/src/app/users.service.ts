import { Injectable } from '@angular/core';
import { UserInterface, AddressInterface } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Array<UserInterface> = [];
  searchResult: Array<UserInterface> = [];
  sortedUsers: Array<UserInterface> = [];

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        this.users = json;
        const sorted = this.sortUsersA();
        console.log(sorted, '!!!sorted');
      });
  }
  
  // fixed the right list of omitted atributes

  searchUsers(
    value: string,
    searchCriterias: Array<
      keyof Omit<UserInterface, 'id' | 'username' | 'website'>
    >
  ) {
    this.searchResult = this.users.filter((user) => {
      return searchCriterias.some((key) => user[key].toString().includes(value));
    });
  }

  sortUsersA(isAlphabetic: boolean = true) {
    this.sortedUsers = [...this.users].sort((user1, user2) =>
      isAlphabetic
        ? user1.name.localeCompare(user2.name)
        : user2.name.localeCompare(user1.name)
    );
    return this.sortedUsers;
  }

  //added lat sort

  sortUsersB(isAlphabetic: boolean = true) {
    this.sortedUsers = [...this.users].sort((user1, user2) =>
      isAlphabetic
        ? user1.address.geo.lat - user2.address.geo.lat
      : user2.address.geo.lat - user1.address.geo.lat
    );
    return this.sortedUsers;
  }
}
