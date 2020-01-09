//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModules} from './admin-routing.module';

//Componentes
import { MainAdminComponent } from './components/main-admin/main-admin.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';

import { UserService } from '../services/user.service';
import { AdminGuard } from '../services/admin.guard';

@NgModule({
    declarations: [
        MainAdminComponent,
        AddComponent,
        ListComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModules
    ],
    providers: [AdminGuard, UserService],
  })
  export class AdminModule { }