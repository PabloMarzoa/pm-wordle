import {NgModule} from "@angular/core";
import {WordsCollectionComponent} from "./view/words-collection.component";
import {CommonModule} from "@angular/common";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
    imports: [
        CommonModule,
        MatRippleModule
    ],
    declarations: [
        WordsCollectionComponent
    ],
    exports: [
        WordsCollectionComponent
    ],
    providers: [],
})
export class WordsCollectionModule {}
