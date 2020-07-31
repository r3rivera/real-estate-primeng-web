import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports:[
    ButtonModule,
    InputTextModule,
    TableModule,
    DialogModule
  ],
  exports:[
    ButtonModule,
    InputTextModule,
    TableModule,
    DialogModule
  ]
})
export class PrimeNgModule{

}
