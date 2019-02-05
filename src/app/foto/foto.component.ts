import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-foto',
    templateUrl: 'foto.component.html'
})

export class FotoComponent {
    @Input()
    url='';

    titulo='';

    @Input()
    descricao='';
    
    _id;
}
