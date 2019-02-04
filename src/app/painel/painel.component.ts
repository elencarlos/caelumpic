import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-painel',
    templateUrl: 'painel.component.html'
})

export class PainelComponent {
    @Input()
    titulo;
}
