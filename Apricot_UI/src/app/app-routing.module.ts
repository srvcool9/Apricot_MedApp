import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [{
  path:"products",
  component: ProductsComponent
},{
  path:"",
  component:HomeComponent
},
{
  path:"contactUs",
  component: ContactusComponent
},{
  path:"aboutus",
  component: AboutusComponent
},{
  path: "**",  // Catch all undefined routes
  redirectTo: '', // Redirect to home or specify another component
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
