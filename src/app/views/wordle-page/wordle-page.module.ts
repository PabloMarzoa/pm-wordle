import {NgModule} from "@angular/core";
import {VirtualKeyboardModule} from "../../components/virtual-keyboard/virtual-keyboard.module";
import {WordsCollectionModule} from "../../components/words-collection/words-collection.module";
import {CommonModule} from "@angular/common";
import {WordlePageComponent} from "./view/wordle-page.component";
import {WordlePageRouting} from "./wordle-page.routing";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
    imports: [
        CommonModule,
        WordlePageRouting,
        MatSnackBarModule,
        VirtualKeyboardModule,
        WordsCollectionModule
    ],
    declarations: [
        WordlePageComponent
    ],
    exports: [],
    providers: []
})
export class WordlePageModule {}
