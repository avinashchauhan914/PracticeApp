import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGeneratorComponent } from '../Admin/data-generator/data-generator.component';

const routes: Routes = [
  {
    path: 'datagenerator',
    component: DataGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
