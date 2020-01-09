import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService} from './services/user.service';
import { User } from './models/user.model';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { GLOBAL } from './services/global.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements DoCheck, OnInit{
  public title: string;
  emailContacto: string;
  public identity;
  public url: string

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.title = 'NGZOO';
    this.url = GLOBAL.url;
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }
  

  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }

}
