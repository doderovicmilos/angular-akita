import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './pages/list/list.component';
import { CreateEditUserComponent } from './components/create-edit-user/create-edit-user.component';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [
    ListComponent,
    CreateEditUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class UsersModule { }
