import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {HttpClientModule} from '@angular/common/http';
import {PainelModule} from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import {roteamento} from "./app.routes";
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
    declarations: [
        AppComponent,
        ListagemComponent,
        CadastroComponent
    ],
    imports: [
        BrowserModule,
        FotoModule,
        PainelModule,
        HttpClientModule,
        roteamento,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
