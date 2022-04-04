import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WordsService} from "./services/words.service";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRouting,
        BrowserAnimationsModule,
        MatToolbarModule,
    ],
    providers: [
        WordsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
