import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

    title = "listagem";
    listaFotos;

    constructor(private api: HttpClient) {
        api.get('http://localhost:3000/v1/fotos')
            .subscribe(fotosApi => {
                    this.listaFotos = fotosApi;
                    console.log(this.listaFotos);
                }, error => {
                    console.log('Deu ruim', error);
                }
            );
    }
}
