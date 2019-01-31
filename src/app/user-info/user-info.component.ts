import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: []
})
export class UserInfoComponent implements OnInit {
  user:{};

  constructor(private route: ActivatedRoute, private usersData: UsersDataService) {
    let paramUserId = this.route.snapshot.params['id']
    this.user = this.usersData.users.filter((user) => (user.id) == paramUserId)[0];
  }

  ngOnInit() {

  }

  ngDoCheck() {
    let paramUserId = this.route.snapshot.params['id']
    this.user = this.usersData.users.filter((user) => (user.id) == paramUserId)[0];
  }
}
