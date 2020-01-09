import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL} from '../../../services/global.service';
import { Animal } from '../../../models/animal.model';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService} from '../../../services/upload.service';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService]
})
export class ListComponent implements OnInit{
   public title : string;
   public numbers = new Array (10);
   public animals : Animal [];
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalSerivce: AnimalService
  ){
    this.title = 'Listado'
  }

  ngOnInit(){
      this._animalSerivce.getAnimals().subscribe(
        response =>{
          if(!response.animals){
            console.log('Error al obtener el listado')
          }else{
            this.animals = response.animals;
          }
        }, 
        error =>{
          console.log(<any> error);
        }
      );
  }
}