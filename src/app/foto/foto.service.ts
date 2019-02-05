import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({providedIn: 'root'})
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
        return this.api.post(this.url,foto,this.cabecalhos)
        .pipe(map(
            ()=>({mensagem: 'Foto salva com sucesso'})
        ));
    }

    editar(foto){
        return this.api.put(this.url+foto._id,foto,this.cabecalhos)
        .pipe(map(
            ()=>({mensagem: 'Foto atualizada com sucesso'})
        ));
    }

    deletar(foto){
        return this.api.delete(this.url+foto._id)
        .pipe(map(
            ()=>({
                mensagem: 'Foto removida com sucesso'
            })
        ));
    }

    obterFoto(id) : Observable<FotoComponent> {
        return this.api.get<FotoComponent>(this.url + id);
    }
}

export class MensagemService{
    constructor(readonly mensagem: string){
    }
}