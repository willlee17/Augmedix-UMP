import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { AppComponent } from '../app.component';
import { UsersDataService } from '../users-data.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: []
})
export class UsersListComponent implements OnInit, DoCheck {
  //Service
  users = [];
  constructor(private usersData: UsersDataService) {}

  ngOnInit() {
    this.users = this.usersData.users;
  }

  ngDoCheck() {
    this.users = this.usersData.users;
    // this.users.roles = this.usersData.roles; // WHY AREN'T YOU CHANGING
  }

  handleDelete(userId) {
    this.usersData.deleteUser(userId);
  }

  downloadCsv(csvData){
    let blob = new Blob([csvData], {type: 'text/csv'});
    let url = window.URL.createObjectURL(blob);
    const a  = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  dataToCsv(){
    let userDataBeforeCsv = this.users.map(user => {
      return {
        name: user.name,
        email: user.email,
        id: user.id,
        roles: user.roles[0].name,
        permissions: user.roles[0].permissions[0],
      }
    })

    // Create CSV file
    function objectToCsv(data) {
      let csvRows = [];
      // Header
      let csvHeaders = Object.keys(data[0]);
      csvRows.push(csvHeaders.join(','))
      console.log(csvRows)
      // Loop over rows
      for (let row of data) {
        let values = csvHeaders.map(header => {
          return row[header];
        })
        csvRows.push(values.join(','))
      }
      return csvRows.join('\n');
    }

    let csvData = objectToCsv(userDataBeforeCsv);
    this.downloadCsv(csvData);
  }
}
