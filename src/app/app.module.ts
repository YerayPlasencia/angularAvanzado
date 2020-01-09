import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { routing, appRoutingProviders } from './app.routing';

//Importar nuevos modulos.
import { ModuloEmailModule } from './moduloemail/modueloemail.module';
import { AdminModule } from './admin/admin.module';

//Components
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent} from './components/keepers/keepers.component';
import { AnimalsComponent} from './components/animals/animals.component';
import { ContactComponent} from './components/contact/contact.component';
import { RegisterComponent} from './components/register/register.component';
import { LoginComponent} from './components/login/login.component';
import { UserEditComponent} from './components/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    KeepersComponent,
    AnimalsComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    ModuloEmailModule,
    AdminModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
