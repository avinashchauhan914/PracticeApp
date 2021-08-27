import { NgModule } from '@angular/core';
import { AdminRoutingModule } from '../Admin/admin-routing.module';
import { DataGeneratorComponent } from '../Admin/data-generator/data-generator.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

import { GridModule } from '@progress/kendo-angular-grid';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    AdminRoutingModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    GridModule
  ],
  declarations: [DataGeneratorComponent]
})
export class AdminModule {}
