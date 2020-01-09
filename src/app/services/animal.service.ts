import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
//import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';

@Injectable()
export class AnimalService{
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    addAnimal(token, animal){
        let params = JSON.stringify(animal);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.post(this.url+'animal', params, {headers: headers})
             //.map( res => res.json());
             .pipe(map((res: any) => res.json()));
    }

    getAnimals(){     
        let headers = new Headers({
        'Content-Type': 'application/json',
    });
        return this._http.get(this.url+'animales', {headers: headers})
                  //.map( res => res.json());
             .pipe(map((res: any) => res.json()));
    }
}