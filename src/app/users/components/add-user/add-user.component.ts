import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/users/store/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  userForm = this.fb.group({
    name: ['', Validators.required],
    active: [false]
  });

  constructor(private fb: FormBuilder, private usersService: UsersService, private dialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    this.usersService.add({name: this.userForm.value.name, active: this.userForm.value.active});
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }

}