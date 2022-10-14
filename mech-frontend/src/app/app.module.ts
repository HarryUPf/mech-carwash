import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';

import { CreateComponent as CarCreateComponent } from './car/create/create.component';
import { ReadComponent as CarReadComponent} from './car/read/read.component';
import { UpdateComponent as CarUpdateComponent} from './car/update/update.component';

import { CreateComponent as ClientCreateComponent } from './client/create/create.component';
import { ReadComponent as ClientReadComponent} from './client/read/read.component';
import { UpdateComponent as ClientUpdateComponent} from './client/update/update.component';

import { CreateComponent as EmployeeCreateComponent } from './employee/create/create.component';
import { ReadComponent as EmployeeReadComponent} from './employee/read/read.component';
import { UpdateComponent as EmployeeUpdateComponent} from './employee/update/update.component';

import { CreateComponent as ProductCreateComponent } from './product/create/create.component';
import { ReadComponent as ProductReadComponent} from './product/read/read.component';
import { UpdateComponent as ProductUpdateComponent} from './product/update/update.component';

import { CreateComponent as ProductOrderCreateComponent } from './product-order/create/create.component';
import { ReadComponent as ProductOrderReadComponent} from './product-order/read/read.component';
import { UpdateComponent as ProductOrderUpdateComponent} from './product-order/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    CarReadComponent,
    CarCreateComponent,
    CarUpdateComponent,
    ClientReadComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    EmployeeReadComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    ProductReadComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductOrderReadComponent,
    ProductOrderCreateComponent,
    ProductOrderUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
