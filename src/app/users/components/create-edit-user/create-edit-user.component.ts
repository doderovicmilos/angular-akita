import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/users/store/user.model';
import { UsersService } from 'src/app/users/store/user.service';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent {

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  userForm = this.fb.group({
    name: ['', Validators.required],
    active: [false]
  });

  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  handleSubmit(){

    this.usersService.add({name: this.userForm.value.name, active: this.userForm.value.active});

    
  }


}
