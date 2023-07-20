import { Injectable } from '@angular/core';
import { User } from './user.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface UsersState extends EntityState<User, number> {}

export function getInitialUsers() {
  return [
   {
      id:0,
      name: 'Mile',
      active: true
    },
   {
      id:1, 
      name: 'Lale',
      active: true
    },
    {
      id:2, 
      name: 'Pera',
      active: true
    },
    {
      id:3,
      name: 'Panta',
      active: true
    },
    {
      id:4,
      name: 'Misko',
      active: false
    },
    {
      id:5,
      name: 'Krki',
      active: false
    },
    {
      id:6,
      name: 'Rile',
      active: false
    },
    {
      id:7,
      name: 'Kale',
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