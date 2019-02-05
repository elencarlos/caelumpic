import { HttpHeaders, HttpClient } from '@angular/common/http';
import { url } from 'inspector';


export class FotoService {
    private url = 'http://localhost:3000/v1/fotos/';

    private cabecalhos = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private api: HttpClient){}

    listar(){
        return (this.api.get(this.url));
    }

    salvar(foto){
        return this.api.post(this.url,foto,this.cabecalhos);
    }
}
