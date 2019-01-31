import * as userData from './users.json';

export class UsersDataService {
  // APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA
  // APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA
  // APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA APPLICATION DATA
  users = (<any>userData).default;  //importing all the default user data from the json file.
  roles = [ 
    {
      name: "Intern",
      id: Math.floor(Math.random() * 100),
      permissions: ["Read"]
    },
    {
      name: "Engineer",
      id: Math.floor(Math.random() * 100),
      permissions: ["Create"]
    },
    {
      name: "Manager",
      id: Math.floor(Math.random() * 100),
      permissions: ["Edit"]
    }
  ]
  permissions = ["Create", "Read", "Update", "Delete", "Publish", "Archive"]


   // USER RELATED FUNCTIONS USER RELATED FUNCTIONS USER RELATED FUNCTIONS USER RELATED FUNCTIONS USER RELATED FUNCTIONS
   // USER RELATED FUNCTIONS USER RELATED FUNCTIONS USER RELATED FUNCTIONS USER RELATED FUNCTIONS USER RELATED FUNCTIONS
   // USER RELATED FUNCTIONS USER RELATED FUNCTIONS USER RELATED FUNCTIONS USER RELATED FUNCTIONS USER RELATED FUNCTIONS
  addNewUser(newAddedUser) {
    this.users.push(newAddedUser)
  }

  deleteUser(userId){
    this.users = this.users.filter(user => user.id !== userId);
  }

  updateUser(updatedUser, updatedUserId) {
    console.log(updatedUser, updatedUserId)
    this.users = this.users.map(user => {
      if (user.id == updatedUserId) {
        return updatedUser
      } else {
        return user
      }
    })
  }

  // ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS
  // ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS
  // ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS ROLE RELATED FUNCTIONS
  addNewRole(newRole){
    this.roles.push(newRole);
  }

  deleteRole(roleId){
    console.log(roleId)
    this.roles = this.roles.filter(role => role.id !== roleId);
  }
}
