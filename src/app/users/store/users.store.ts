import { Injectable } from '@angular/core';
import { User } from './user.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface UsersState extends EntityState<User, number> {}

export function getInitialUsers() {
  return [
   {
      id:0,
      name: 'Dewey',
      active: true
    },
   {
      id:1, 
      name: 'Simon',
      active: true
    },
    {
      id:2, 
      name: 'Kira',
      active: true
    },
    {
      id:3,
      name: 'Taylor',
      active: true
    },
    {
      id:4,
      name: 'Miles',
      active: false
    },
    {
      id:5,
      name: 'Andrew',
      active: false
    },
    {
      id:6,
      name: 'Brandon',
      active: false
    },
    {
      id:7,
      name: 'Edwin',
      active: false
    }
  ];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UsersStore extends EntityStore<UsersState> {
  
  constructor() {
    super();
    this.set(getInitialUsers());
  }


}