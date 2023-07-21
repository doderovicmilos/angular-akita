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

  add(product: any) {
    const id =  this.usersQuery.getAll().map(it => it.id).reduce((a,b)=>(a > b) ? a : b) + 1;
    this.productsStore.add({id, ...product});
  }

  update(id: number, product: Partial<User>) {
    this.productsStore.update(id, product);
  }

  remove(id: number) {
    this.productsStore.remove(id);
  }

}