import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/users/store/user.model';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent {

  @Output() onSubmit: EventEmitter<User> = new EventEmitter();

  userForm = this.fb.group({
    name: ['', Validators.required],
    active: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    console.log(this.userForm.value);
  }


}
