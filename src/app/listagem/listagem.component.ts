import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

    title = "Galeria de Fotos Aleatórias";
    listaFotos;
    mensagem;

    constructor(private api: FotoService) {
        api.listar()
            .subscribe(fotosApi => {
                this.listaFotos = fotosApi;
                console.log(this.listaFotos);
            }, error => {
                console.log('Deu ruim', error);
            }
            );
    }

    remover(foto) {
        this.api.deletar(foto).subscribe(
            mensagemApi => {                     
                this.listaFotos = this.listaFotos.filter(
                    fotoDaLista => fotoDaLista._id != foto._id
                );
                this.mensagem = mensagemApi.mensagem;
                setTimeout(()=>{
                    this.mensagem = null;
                },5000);    
            },
            erro => console.log('deu ruim', erro)
        );
    }
}
