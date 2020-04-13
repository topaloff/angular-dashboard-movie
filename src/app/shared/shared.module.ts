import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],

})
export class SharedModule { }
