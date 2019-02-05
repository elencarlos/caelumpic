import {Component, OnInit} from '@angular/core';
import {FotoComponent} from "../foto/foto.component";

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    title = 'Cadastrar novo';

    foto = new FotoComponent();

    constructor() {
    }

    ngOnInit() {
    }

    salvar(event) {
        event.preventDefault();
        console.log(this.foto);
    }

}
