import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WordsService} from "./services/words.service";

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRouting,
        BrowserAnimationsModule,
    ],
    providers: [
        WordsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
