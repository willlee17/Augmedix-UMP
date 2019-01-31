import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersDataService]
})
export class AppComponent {
  // Make it so that oncomponentdidmount this users array gets populated with a json file.


  // onAddedUser(newUserData) {
  //   this.users.push(newUserData)
  // }

}
