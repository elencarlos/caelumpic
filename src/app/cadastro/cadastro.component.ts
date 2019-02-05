import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FotoService } from '../foto/foto.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    title = 'Cadastrar novo';

    foto = new FotoComponent();

    constructor(private fotoService: FotoService, private router: Router) {
    }

    ngOnInit() {
    }

    salvar(event) {

        this.fotoService.salvar(this.foto)
            .subscribe(() => {
                console.log('foto salva com sucesso');
                this.foto = new FotoComponent();
                setTimeout(
                    () => {
                        this.router.navigate([''])
                    }, 2000
                );
            },
                erro => console.log(erro)
            );




    }

}
