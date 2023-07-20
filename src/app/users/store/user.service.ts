import { Injectable } from '@angular/core';
import { User } from './user.model';
import { UsersStore } from './users.store';
import { UsersQuery } from 'src/app/users/store/user.query';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private productsStore: UsersStore, private usersQuery: UsersQuery ) {}

  selectAll(): Observable<User[]> {
    return this.usersQuery.selectAll();
  }

  add(product: User) {
    this.productsStore.add(product);
  }

  update(id: number, product: Partial<User>) {
    this.productsStore.update(id, product);
  }

  remove(id: number) {
    this.productsStore.remove(id);
  }

}