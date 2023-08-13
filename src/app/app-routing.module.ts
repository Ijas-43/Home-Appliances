import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'signup' , component: SignupComponent
  },
  {
    path: 'address' , component: AddressComponent
  },
  {
    path: 'contact' , component: ContactComponent
  },
  {
    path: 'payment' , component: PaymentComponent
  },
  {
    path: 'confirm' , component: ConfirmComponent
  },
  {
    path: 'product' , component: ProductComponent
  },
  {
    path: 'about' , component: AboutComponent
  },
  {
    path: 'services' , component: ServicesComponent
  },
  {
    path: 'cart' , component: CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
