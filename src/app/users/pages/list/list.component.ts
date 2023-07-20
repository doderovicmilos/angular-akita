import { Component } from '@angular/core';
import { Observable, Subject, filter, Subscription } from 'rxjs';
import { User } from 'src/app/users/store/user.model';
import { UsersQuery } from 'src/app/users/store/user.query';
import { UsersService } from 'src/app/users/store/user.service';
import { UsersStore } from 'src/app/users/store/users.store';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  users$ = this.usersService.selectAll();
  displayAddUser: boolean = false;
  displayAddUserSub: Subscription | undefined;

  constructor(private usersService: UsersService){ }

  areActiveLacking(users: User[]): boolean{
    return users.filter(it => it.active).length < 5
  }

  ngOnInit(): void {
    this.displayAddUserSub = this.users$.subscribe(users => {
      this.displayAddUser = this.areActiveLacking(users)
    });
  }

  toggleActive(user: User){
    this.usersService.update(user.id, {...user, active: !user.active});
  }

  deleteUser(id: number){
    this.usersService.remove(id);
  }

  showAddUserForm(){

  }

  ngOnDestroy(): void {
    this.displayAddUserSub?.unsubscribe();
  }

}
