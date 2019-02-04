import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Caelum Pic';
    listaFotos;

    constructor(private api: HttpClient) {
        api.get('http://localhost:3000/v1/fotos')
            .subscribe(fotosApi => {
                    this.listaFotos = fotosApi;
                    console.log(this.listaFotos);
                }, error => {
                    console.log('Deu ruim');
                }
            );
    }
}
