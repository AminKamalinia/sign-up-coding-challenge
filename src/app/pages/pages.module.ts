import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CustomerService } from '../services';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    PagesRoutingModule
  ],
  providers: [
    CustomerService
  ]
})
export class PagesModule { }
