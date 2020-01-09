import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL} from '../../../services/global.service';
import { Animal } from '../../../models/animal.model';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService} from '../../../services/upload.service';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers: [UploadService, UserService, AnimalService]
})
export class AddComponent implements OnInit{
  public title;
  public animal: Animal;
  public identity;
  public token;
  public url :string;
  public status;

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ){
    this.title = 'Añadir';
    this.animal = new Animal('', '', '', 2019, '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    console.log('Animal Add componente ha sido cargado');
  }

  onSubmit(){
    console.log(this.animal);
    this._animalService.addAnimal(this.token, this.animal).subscribe(
      response => {
        if(!response.animal){
          this.status = 'error';
        }else{
          this.status = 'success'
          this.animal = response.animal;

          //Subir Imagen
          if(!this.filesToUpload){
            this._router.navigate(['/admin-panel/listado'])
          }else{
            this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal.id,[],this.filesToUpload, this.token, 'image')
            .then((result:any) => {
                this.animal.image = result.image;
                console.log(this.animal);
                this._router.navigate(['/admin-panel/listado'])
            });
          }
        }

      }, 
      error => {
        var errorMessage = <any> error;
        if(errorMessage != null){
          this.status = 'error';
        }
      }
    );
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInpunt: any){
    this.filesToUpload = <Array<File>>fileInpunt.target.files;
  }
}