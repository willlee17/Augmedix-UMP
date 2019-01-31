import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsersDataService } from '../users-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css'],
  providers: []
})
export class UserInfoFormComponent implements OnInit {
  // Get from services later on JUST FOR NOWWWWWW
  roles = this.usersData.roles;

  userInfoForm: FormGroup;
  userParamId:number;
  userToEdit;
  userCurrentRoles;
  constructor(private usersData: UsersDataService, private route: ActivatedRoute) {
    let paramId = this.route.snapshot.params['id'];  //This is here so that I can pull the specific user from the users service and I can populate my form fields.
    this.userParamId = paramId;
    this.userToEdit = this.usersData.users.filter(user => user.id == this.userParamId)[0]; //Straight up returns the object that I'm looking for now. GREAT!
    this.userCurrentRoles = this.userToEdit.roles.map(role => role.name); //list of the user's CURRENT roles' names. This is used for presetting the FormArray select boxes.
  }


  ngOnInit() {
      let formControls = this.roles.map(control => new FormControl( (this.userCurrentRoles.indexOf(control.name) > -1) ));
      this.userInfoForm = new FormGroup({
        'name': new FormControl(this.userToEdit.name, Validators.required),
        'email': new FormControl(this.userToEdit.email, [Validators.required, Validators.email]),
        'roles': new FormArray(formControls)
      });
  }

  onSubmit() {
    let selectedHobbies = this.userInfoForm.value.roles.map((checked, index) => checked ? this.roles[index] : null )
    selectedHobbies = selectedHobbies.filter(value => value !== null);
    this.userInfoForm.value.roles = selectedHobbies;

    this.userInfoForm.value.id = this.userParamId;
    this.usersData.updateUser(this.userInfoForm.value, this.userParamId);
    this.userInfoForm.reset();
  }

}
