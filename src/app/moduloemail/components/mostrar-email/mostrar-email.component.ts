import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
            <div *ngIf="emailContacto">
                <h4>{{tittle}}</h4>
                <strong>Email de Contacto:</strong> {{emailContacto}}
                <button (click) = "borrarEmail()">Eliminar email de Contacto</button>
            </div>`
})
export class MostrarEmailComponent implements DoCheck, OnInit{
  title = 'Mostrar Email';
  emailContacto: string;

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}