import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from '../Authentication/authentication-routing.module';
import { LoginComponent } from '../Authentication/login/login.component';
import { RegisterComponent } from '../Authentication/register/register.component';

@NgModule({
  imports: [AuthenticationRoutingModule],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthenticationModule {}
