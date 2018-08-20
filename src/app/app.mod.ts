import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppNewComponent } from './app.comp';
import { ProductComponent } from './products/product.comp';
import { MyUppercasePipe } from './products/prodUpper.pipe';
import { AddValuePipe } from './products/addValue.pipe';
import { FilterPipe } from './products/filterData.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppNewComponent,ProductComponent,MyUppercasePipe,AddValuePipe,FilterPipe
  ],
  bootstrap: [AppNewComponent]
})
export class AppModule { }
