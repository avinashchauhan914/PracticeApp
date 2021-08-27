import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDetailsListComponent } from '../Admin/data-details-list/data-details-list.component';
import { DataGeneratorComponent } from '../Admin/data-generator/data-generator.component';

const routes: Routes = [
  {
    path: 'datagenerator',
    component: DataGeneratorComponent
  },
  {
    path: 'details',
    component: DataDetailsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
