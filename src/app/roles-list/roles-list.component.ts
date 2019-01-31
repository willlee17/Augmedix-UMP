import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../users-data.service';


@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css'],
  providers: []
})
export class RolesListComponent implements OnInit {
  roles=[];
  constructor(private usersData: UsersDataService) { }

  ngOnInit() {
    this.roles = this.usersData.roles;
  }

  ngDoCheck() {
    this.roles = this.usersData.roles;
  }

  handleDelete(roleId) {
    this.usersData.deleteRole(roleId);
  }

}
