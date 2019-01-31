import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsersDataService } from '../users-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
  providers: []
})
export class UsersFormComponent implements OnInit {
  roles = this.usersData.roles
  constructor(private usersData: UsersDataService) {}

  userForm: FormGroup;

  ngOnInit() {
      let formControls = this.roles.map(control => new FormControl(false)); //this unchecks the boxes when initialized.
      this.userForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'roles': new FormArray(formControls)
      });
  }

  onSubmit() {
    let selectedHobbies = this.userForm.value.roles.map((checked, index) => checked ? this.roles[index] : null )
    selectedHobbies = selectedHobbies.filter(value => value !== null);
    this.userForm.value.roles = selectedHobbies;

    console.log(this.userForm.value); //when the user adds the role. Make it go up the service and find the permissions associated with it and attach it here.
    this.userForm.value.id = Math.floor(Math.random() * 100);
    this.usersData.addNewUser(this.userForm.value);
    this.userForm.reset();
  }
}
