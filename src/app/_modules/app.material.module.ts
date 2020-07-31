import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


const materialModuels = [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  imports:[...materialModuels],
  exports:[...materialModuels]
})
export class MaterialModule{

}
