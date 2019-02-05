import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FotoService } from '../foto/foto.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    title = 'Cadastrar novo';
    formulario;
    foto = new FotoComponent();

    mensagem = null;

    constructor(
        private fotoService: FotoService,
        private router: Router,
        private activeRoute: ActivatedRoute,
        private formBuilder: FormBuilder) {

        this.formulario = formBuilder.group({
            titulo: ['', Validators.compose([
                Validators.required, Validators.minLength(5)
            ]
            )],
            url: ['',Validators.required],
            descricao: ['']
        });

        this.formulario.valueChanges.subscribe(valores => { this.foto = Object.assign(this.foto, valores) })

        this.activeRoute.params.subscribe(
            params => {
                if (params.fotoId) {
                    this.fotoService.obterFoto(params.fotoId)
                        .subscribe(
                            fotoApi => {
                                this.foto = fotoApi;
                                this.formulario.patchValue(this.foto);
                            },
                            erro => {
                                console.log('não é possivel editar', erro)
                            }
                        );
                }

            }
        );
    }

    ngOnInit() {
    }

    salvar() {

        if (this.foto._id) {
            this.fotoService.editar(this.foto)
                .subscribe(mensagemApi => {
                    this.mensagem = mensagemApi.mensagem;
                    this.foto = new FotoComponent();
                    setTimeout(
                        () => {

                            this.router.navigate([''])
                        }, 2000
                    );
                },
                    erro => console.log(erro)
                );
        } else {
            this.fotoService.salvar(this.foto)
                .subscribe(
                    mensagemApi => {
                        this.mensagem = mensagemApi.mensagem;
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

    get titulo(){
        return this.formulario.get('titulo');
    }

}
