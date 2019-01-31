import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.css'],
  providers: []
})
export class RolesFormComponent implements OnInit {
  permissions = this.usersData.permissions
  constructor(private usersData: UsersDataService) {}

  rolesForm: FormGroup;

  ngOnInit() {
      let formControls = this.permissions.map(control => new FormControl(false));
      this.rolesForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'permissions': new FormArray(formControls)
      });
  }

  onSubmit() {
    let selectedPermissions = this.rolesForm.value.permissions.map((checked, index) => checked ? this.permissions[index] : null )
    selectedPermissions = selectedPermissions.filter(value => value !== null);
    this.rolesForm.value.permissions = selectedPermissions;
    this.rolesForm.value.id = Math.floor(Math.random() * 100);

    console.log(this.rolesForm.value);
    this.usersData.addNewRole(this.rolesForm.value);
    this.rolesForm.reset();
  }
}
