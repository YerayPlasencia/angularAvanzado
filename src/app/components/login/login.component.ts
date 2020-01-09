import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService]
  })

  export class LoginComponent  implements OnInit {
    public title;
    public user: User;
    public identity;
    public token;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
        ) {
             this.title = 'Identifícate';
             this.user = new User('', '', '', '', '', 'ROLE_USER', '');
         }

    ngOnInit() {
      console.log('login.component cargado !!');
      console.log(this._userService.getIdentity);
      console.log(this._userService.getToken);
    }

    onSubmit() {
      //Loguer al usuario y conseguir el objeto
      this._userService.signup(this.user).subscribe(
        response => {
          this.identity = response.user;
          if ( !this.identity || !this.identity._id) {
            alert ('El usuario no se ha loegado correctamente');
          } else {
            this.identity.password = '';
            localStorage.setItem('identity', JSON.stringify(this.identity));
            //Conseguir el token
            this._userService.signup(this.user, 'true').subscribe(
              response => {
                this.token = response.token;
                console.log('Antes de revisar Token');
                if ( this.token.length <= 0 || response.error) {
                  alert ('El token no se ha generado');
                  this.status = 'error';
                } else {
                  localStorage.setItem('token', this.token);
                  this.status = 'success';
                  this._router.navigate(['/']);
                }
              }
             /* error => {
                //var errorMessage = <any> error;
                //if (errorMessage != null) {
                console.log('Estamos en error');
                if (!<any> error) {
                  console.log('Dentro de  error');
                  const body = JSON.parse(error._body);
                  this.status = 'error';
                  console.log(this.status);
                }
              }*/
            );
          }
        },
        error => {
          console.log(<any> error);
        }
      );
    }
  }