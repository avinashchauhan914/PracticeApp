import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from '../Authentication/authentication-routing.module';
import { LoginComponent } from '../Authentication/login/login.component';
import { RegisterComponent } from '../Authentication/register/register.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    AuthenticationRoutingModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    DropdownModule
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthenticationModule {}
