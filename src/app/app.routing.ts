import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


//Componentes
import { TiendaComponent} from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent} from './components/keepers/keepers.component';
import { AnimalsComponent} from './components/animals/animals.component';
import { ContactComponent} from './components/contact/contact.component';
import { RegisterComponent} from './components/register/register.component';
import { LoginComponent} from './components/login/login.component';
import { UserEditComponent} from './components/user-edit/user-edit.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'animales', component: AnimalsComponent},
    {path: 'cuidadores', component: KeepersComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'mis-datos', component: UserEditComponent},
    {path: '**', component: TiendaComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);