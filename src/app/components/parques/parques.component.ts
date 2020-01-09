import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

    @Input() nombre: string;
    @Input() metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = 'Parque Natural para Caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = true;
    }
    
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    ngOnInit() {
        console.log('Metodo OnInt Lanzado');
    }

    ngDoCheck() {
      console.log('El DoCheck se ha lanzado');
    }

    ngOnDestroy() {
        console.log('Se va a eliminar el componente');
    }

    emitirEvento(){
        this.pasameLosDatos.emit({
             'nombre': this.nombre,
             'metros': this.metros,
             'vegetacion': this.vegetacion,
             'abierto': this.abierto
        });
    }

}