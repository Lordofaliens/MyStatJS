import { Component, Input, OnInit } from '@angular/core';
import {
  AddressInterface,
  CompanyInterface,
  GeoInterface,
  UserInterface,
} from 'src/types';
import { UsersService } from '../users.service';
import { execlude, set } from 'src/utils/object';

type UnionUserType =
  | keyof Omit<UserInterface, 'address' | 'company'>
  | keyof Omit<AddressInterface, 'geo'>
  | keyof GeoInterface
  | keyof CompanyInterface;

type MergedUserType = Omit<UserInterface, 'address' | 'company'> &
  Omit<AddressInterface, 'geo'> &
  GeoInterface &
  CompanyInterface;

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css'],
})
export class UserEditFormComponent implements OnInit {
  @Input() user: UserInterface | null = null;
  @Input() editFields: Array<UnionUserType> = [];

  mergedUser: MergedUserType | null = null;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.editFields = this.editFields
      .map((key) => this.getDataFromUserFields(key))
      .flat() as any;

    this.mergedUser = {
      ...execlude(this.user, ['address', 'company']),
      ...execlude(this.user!.address, ['geo']),
      ...this.user!.address.geo,
      ...this.user!.company
    };
  }

  onInput(event: Event) {
    const input = event.target! as HTMLInputElement;
    const inputName = input.name as keyof UserInterface;

    // this.user![inputName] = input.value as never;
    set(this.user, inputName, input.value);

    console.log('USER', this.user);
  }

  getDataFromUserFields(key: UnionUserType) {
    const value = this.user![key as keyof UserInterface] || null;

    if (value && typeof value === 'object') {
      return Object.keys(value);
    }

    return key;
  }

  getFieldUserData(key: string) {

    return (
      this.user![key as keyof UserInterface] ||
      (typeof this.user!.address[key as keyof AddressInterface] !== 'object'
        ? this.user!.address[key as keyof AddressInterface]
        : this.user!.address.geo[key as keyof GeoInterface]) ||
      // this.user!.address.geo[key as keyof GeoInterface] ||
      this.user!.company[key as keyof CompanyInterface]
    );
  }
  
}
