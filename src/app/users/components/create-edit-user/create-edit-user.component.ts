import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from 'src/app/users/store/user.model';
import { UsersService } from 'src/app/users/store/user.service';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss'],
})
export class CreateEditUserComponent {

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  userForm = this.fb.group({
    name: ['', Validators.required],
    active: [false]
  });

  constructor(private fb: FormBuilder, private usersService: UsersService, private dialogRef: MatDialogRef<CreateEditUserComponent>) { }

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
