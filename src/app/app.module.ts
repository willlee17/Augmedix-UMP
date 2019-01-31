import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersContainerComponent } from './users-container/users-container.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { RolesContainerComponent } from './roles-container/roles-container.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesFormComponent } from './roles-form/roles-form.component';
import { HeaderComponent } from './header/header.component';
import { UserInfoComponent } from './user-info/user-info.component';

import { FakeContainerComponent } from './fake-container/fake-container.component';
import { Fake1Component } from './fake-container/fake1/fake1.component';
import { Fake2Component } from './fake-container/fake2/fake2.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';





const applicationRoutes:Routes = [
  { path: '', component: UsersContainerComponent },
  { path: 'users', component: UsersContainerComponent },
  { path: 'users/:id', component: UserInfoComponent},
  { path: 'roles', component: RolesContainerComponent },
  { path: 'fake/:id', component: FakeContainerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersFormComponent,
    RolesContainerComponent,
    HeaderComponent,
    UserInfoComponent,
    FakeContainerComponent,
    Fake1Component,
    Fake2Component,
    UsersContainerComponent,
    UserInfoFormComponent,
    RolesListComponent,
    RolesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
