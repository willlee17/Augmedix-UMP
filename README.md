
# Augmedix User Management Portal
This is William Lee's Augmedix UMP Angular project.

## Brief Summary
I created a simple Angular application for user management. You can create, read, update, and delete users as well as roles.
It's setup with routing capabilities using Angular's routing module. This allows for the application to be able to figure out which specific users are clicked on. The same goes for roles.
Creation of roles and users are implemented through Angular's Forms module. I used reactive forms as well as routing parameters so that when you click "Edit", the form populates with the user to be edited.
All users, roles, and permissions storage and relevant functions are created in a Service module that I created.

Other features that I implemented throughout the application are:
* Higher order functions
* Usage of lifecycle components to update data that has been changed and initialize components
* Data binding, string interpolation, property binding, and directives

--------

## Improvements / Time Constraints:
* Overall styling. Cleaner cards and list groups.
* Small bugs
  * If user has multiple roles that has multiple permissions. Duplicates will show up.
  * CSV only gets the first role and first permission.
* NOTE: First Angular application I've created. So my usage of certain Angular features may be incorrectly implemented.
