import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name:'filtraPorTitulo'
})
export class FiltraPorTitulo implements PipeTransform{
    
    transform(fotos: FotoComponent[], tituloPesquisado: string) {
        return fotos.filter(
            foto => foto.titulo.toLowerCase().includes(tituloPesquisado.toLowerCase())
        );
    }

}