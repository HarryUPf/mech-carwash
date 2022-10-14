import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';

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

const routes: Routes = [
    {path:'car/create', component:CarCreateComponent},
    {path:'car/read', component:CarReadComponent},
    {path:'car/update', component:CarUpdateComponent},
    {path:'client/create', component:ClientCreateComponent},
    {path:'client/read', component:ClientReadComponent},
    {path:'client/update', component:ClientUpdateComponent},
    {path:'employee/create', component:EmployeeCreateComponent},
    {path:'employee/read', component:EmployeeReadComponent},
    {path:'employee/update', component:EmployeeUpdateComponent},
    {path:'product/create', component:ProductCreateComponent},
    {path:'product/read', component:ProductReadComponent},
    {path:'product/update', component:ProductUpdateComponent},
    {path:'product-order/create', component:ProductOrderCreateComponent},
    {path:'product-order/read', component:ProductOrderReadComponent},
    {path:'product-order/update', component:ProductOrderUpdateComponent},
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
