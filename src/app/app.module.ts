import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './pipes/-search.pipe';


//import { ObjToArrayPipe } from './objectToArray.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductFormComponent,
    SearchComponent,
    SearchPipe,
    //ObjToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule // Para aprovechar la reactividad de Angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
