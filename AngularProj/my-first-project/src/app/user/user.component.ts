import { Component, Input } from '@angular/core';
import { UnionUserType, UserInterface, AddressInterface, GeoInterface, CompanyInterface } from 'src/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: UserInterface | null = null;
  isUserDataEditing: boolean = false;

  showUserData() {
    console.log(this.user, "USER");
  }

  toggleIsUserDataEditing() {
    this.isUserDataEditing = !this.isUserDataEditing;
  }

  // edit fields that edit only string

  getEditFields(): Array<UnionUserType> {
    const allKeys: Array<keyof UserInterface> = Object.keys(this.user || {}) as Array<keyof UserInterface>;
    return allKeys.filter((key) => typeof this.user![key] === 'string') as Array<UnionUserType>;
  }
}
