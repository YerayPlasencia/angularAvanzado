import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { MainAdminComponent } from './components/main-admin/main-admin.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminGuard } from '../services/admin.guard';

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainAdminComponent,
        canActivate: [AdminGuard],
        children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full' },
            { path: 'listado', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar', component: EditComponent }
        ]
    },
    { path: 'listado-del-panel', component: ListComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModules {}